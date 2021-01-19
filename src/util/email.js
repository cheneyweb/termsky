const nodemailer = require('nodemailer')

function send(inparam) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.mxhichina.com',
        port: 465,
        secure: true,
        auth: {
            user: "captcha@xserver.top",
            pass: "Qiyexys36"
        }
    })

    let mailOptions = {
        from: '"XTermius" <captcha@xserver.top>',
        to: inparam.to,
        subject: inparam.subject,
        text: inparam.content,
        html: inparam.content
    }

    transporter.sendMail(mailOptions, (error, info) => {
        log.info(`邮件发送完毕：${JSON.stringify(info)}`)
        if (error) {
            log.error(error)
        }
    })
}

module.exports = send