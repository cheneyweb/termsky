// 系统配置参数
const config = require('config')
const fs = require('fs')
const { ACTION } = require('./src/util/consts.js')
const serverPort = config.server.port

// SSH服务相关
const WebSocket = require('ws')
const Client = require('ssh2').Client

// 应用服务相关
const Koa = require('koa')
const cors = require('@koa/cors')
const koaBody = require('koa-body')
const mount = require('koa-mount')

// 应用中间件
const xcontroller = require('koa-xcontroller')
const xnosql = require('koa-xnosql')
const xerror = require('koa-xerror')
const xauth = require('koa-xauth')
const xguard = require('koa-xguard')
const xlog = require('koa-xlog')

// 全局工具
global.log = require('tracer').colorConsole({ level: config.log.level })
global._ = require('lodash')
global.moment = require('moment')
global.axios = require('axios')
global.config = require('config')
global.jwt = require('jsonwebtoken')
global.Router = require('koa-router')
const { COLLECTION } = require('./src/util/consts.js')
global.COLLECTION = COLLECTION
global.userMap = {}
global.captchaMap = {}

// 应用服务
const app = new Koa()
app.use(mount('/', cors()))
app.use(xerror(config.error))
app.use(koaBody())
app.use(xlog(config.log))
app.use(xauth(config.auth))
// app.use(xguard(config.guard))

xnosql.init(app, config.server)
xcontroller.init(app, config.server)

// WS双工服务
const wss = new WebSocket.Server({ port: config.termius.port })
wss.on('connection', (ws, req) => {
    // 身份认证
    // let authRes = jwt.verify(url.parse(req.url, true).query.token, config.auth.secret)
    // console.log(authRes)
    // 通过身份认证后获取用户信息
    let user = global.userMap[authRes.id] = {
        ws: ws,
        sshMap: {},
        id: authRes.id,
        key: authRes.key,
        ip: req.socket.remoteAddress,
        isIdle: true
    }
    try {
        ws.on('message', msg => {
            // 接收命令请求
            let command = JSON.parse(msg)
            // 建立新SSH连接
            if (command.action == ACTION.NEW_CONNECT) {
                // 查询用户连接配置
                let connectConfig = {
                    host: '101.132.222.146',
                    port: 22,
                    username: 'root',
                    privateKey: fs.readFileSync('/Users/cheney/project/dingstock/ts.pem')
                }
                // 创建新连接，成功后回复
                let sshConn = new Client()
                sshConn
                    .on('ready', () => {
                        // 生成ssh唯一ID
                        let sshConnId = Date.now().toString(36)
                        sshConn.sshConnId = sshConnId
                        // 将ssh与用户绑定
                        user.sshMap[sshConnId] = {
                            sshConnId,
                            sshConn,
                            shellStream: null
                        }
                        ws.send(JSON.stringify({ action: ACTION.NEW_CONNECT, result: 'Y', sshConnId }))
                        // 开启shell交互
                        sshConn.shell((err, stream) => {
                            if (err) throw { sshConnId, err }

                            // 将shell交互与用户绑定
                            user.sshMap[sshConnId].shellStream = stream

                            // 回复连接信息
                            ws.send(JSON.stringify({ action: ACTION.NEW_CONNECT_SHELL, result: 'Y', sshConnId }))

                            // 交互响应
                            stream.on('close', () => {
                                log.warn('SSH交互关闭')
                                sshConn.end()
                            }).on('data', (data) => {
                                console.log('OUTPUT: ' + data)
                                ws.send(data.toString())
                            })
                        })

                    })
                    .on('error', (err) => {
                        log.error(err)
                        log.error('SSH连接错误')
                        sshConn.sshConnId ? delete user.sshMap[sshConn.sshConnId] : null
                        throw err
                    })
                    .on('end', () => {
                        log.warn('SSH连接已断开')
                        sshConn.sshConnId ? delete user.sshMap[sshConn.sshConnId] : null
                        throw 'SSH连接已断开'
                    })
                    .on('close', () => {
                        log.warn('SSH连接已关闭')
                        sshConn.sshConnId ? delete user.sshMap[sshConn.sshConnId] : null
                        throw 'SSH连接已关闭'
                    })
                    .connect(connectConfig)
            }
            // 查询旧SSH连接
            else {
                let ssh = user.sshMap[command.sshConnId]
                if (!ssh) {
                    ws.send(JSON.stringify({ err: true, msg: 'SSH连接不存在' }))
                }
                if (!ssh.shellStream) {
                    ws.send(JSON.stringify({ err: true, msg: 'SSH交互不存在' }))
                }
                ssh.shellStream.end(command.data)
            }
            // sshConn.on('ready', () => {
            //     console.log('Client :: ready')
            //     sshConn.shell((err, stream) => {
            //         if (err) throw err
            //         stream.on('close', () => {
            //             console.log('Stream :: close')
            //             sshConn.end()
            //         }).on('data', (data) => {
            //             console.log('OUTPUT: ' + data)
            //             ws.send(data.toString())
            //         })
            //         stream.end('ls -l\nexit\n')
            //         // stream.end('ls -l\nexit\n')
            //     })
            // }).connect({
            //     host: '101.132.222.146',
            //     port: 22,
            //     username: 'root',
            //     privateKey: fs.readFileSync('/Users/cheney/project/dingstock/ts.pem')
            // })
        })
        ws.on('close', () => { log.warn('链接关闭') })
        ws.on('error', () => { log.error('链接错误') })
    } catch (error) {
        // 断开WS
        ws.terminate()
        log.error(error)
    }
})

app.listen(serverPort)
log.info(`TERMIUS应用服务启动【执行环境:${process.env.NODE_ENV},端口:${serverPort}】`)
log.info(`TERMIUSSSH服务启动【执行环境:${process.env.NODE_ENV},端口:${config.termius.port}】`)