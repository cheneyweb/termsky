const fs = require('fs')
const Client = require('ssh2').Client

var sshConn = new Client()

sshConn.on('ready', () => {
    console.log('Client :: ready')
    sshConn.shell((err, stream) => {
        if (err) throw err
        stream.on('close', () => {
            console.log('Stream :: close')
            sshConn.end()
        }).on('data', (data) => {
            console.log('OUTPUT: ' + data)
        })
        stream.end('ls -l\n')
        // stream.end('ls -l\nexit\n')
    })
}).connect({
    host: '101.132.222.146',
    port: 22,
    username: 'root',
    privateKey: fs.readFileSync('/Users/cheney/project/dingstock/ts.pem')
})