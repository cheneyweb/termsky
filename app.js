const config = require('config')
const fs = require('fs')
const WebSocket = require('ws')
const Client = require('ssh2').Client

// 全局工具
global.log = require('tracer').colorConsole({ level: config.log.level })

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