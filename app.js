// 系统配置参数
const config = require('config')
const fs = require('fs')

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

// 应用服务
const app = new Koa()
app.use(mount('/', cors()))
app.use(xerror(config.error))
app.use(koaBody())
app.use(xlog(config.log))
app.use(xauth(config.auth))
// app.use(xguard(config.guard))

// WS双工服务
const wss = new WebSocket.Server({ port: config.termius.port })
wss.on('connection', (ws, req) => {
    try {
        ws.on('message', msg => {
            log.info(msg)

            const sshConn = new Client()
            sshConn.on('ready', () => {
                console.log('Client :: ready')
                sshConn.shell((err, stream) => {
                    if (err) throw err
                    stream.on('close', () => {
                        console.log('Stream :: close')
                        sshConn.end()
                    }).on('data', (data) => {
                        console.log('OUTPUT: ' + data)
                        ws.send(data.toString())
                    })
                    stream.end('ls -l\nexit\n')
                    // stream.end('ls -l\nexit\n')
                })
            }).connect({
                host: '101.132.222.146',
                port: 22,
                username: 'root',
                privateKey: fs.readFileSync('/Users/cheney/project/dingstock/ts.pem')
            })

        })
        ws.on('close', () => { log.warn('链接关闭') })
        ws.on('error', () => { log.error('链接错误') })
    } catch (error) {
        ws.terminate()
        log.error(error)
    }
})
log.info(`TERMIUS服务启动【执行环境:${process.env.NODE_ENV},端口:${config.termius.port}】`)