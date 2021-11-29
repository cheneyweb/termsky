// 路由相关
const router = new Router()
const sendEmail = require('../util/email.js')
// /**
//  * 注册
//  */
// router.post('/reg', async (ctx, next) => {
//     let inparam = ctx.request.body
//     let user = await mongodb.collection(COLLECTION.USER).findOne({ username: inparam.username })
//     if (user) {
//         ctx.body = { err: true, res: '账号已存在' }
//         return next()
//     } else {
//         let user = {
//             _id: Date.now().toString(36),
//             username: inparam.username,
//             password: inparam.password,
//             createdAt: Date.now(),
//             createdAtStr: moment().format('YYYY-MM-DD HH:mm:ss')
//         }
//         await mongodb.collection(COLLECTION.USER).insertOne(user)
//         user.id = user._id
//         user.token = jwt.sign({ id: user._id, role: 'user' }, config.auth.secret)
//         delete user.password
//         ctx.body = { err: false, res: user }
//         return next()
//     }
// })

/**
 * 发送验证码
 */
router.get('/code', async (ctx, next) => {
    let inparam = ctx.request.query
    if (inparam.username) {
        // 生成验证码
        let code = _.sampleSize('abcdefghijklmnopqrstuvwxyz01234567890123456789', 8).join('')
        // 发送邮件
        sendEmail({ to: inparam.username, subject: `XTerminus注册验证码:${code}`, content: `感谢您使用XTerminus服务，这是您的邮箱验证码：<b>${code}</b>` })
        global.captchaMap[inparam.username] = { iat: Date.now(), code }
        ctx.body = { err: false, res: 'Y' }
    } else {
        ctx.body = { err: true, res: 'INVALID EMAIL' }
    }
    return next()
})

/**
 * 登录
 */
router.post('/login', async (ctx, next) => {
    let inparam = ctx.request.body
    // 检查登录码
    log.info(global.captchaMap[inparam.username])
    // if (!global.captchaMap[inparam.username] || global.captchaMap[inparam.username].iat < Date.now() - 5 * 60 * 1000 || global.captchaMap[inparam.username].code != inparam.password) {
    //     ctx.body = { err: true, res: 'INVALID CODE' }
    //     return next()
    // }
    // 查询用户
    let user = await mongodb.collection(COLLECTION.USER).findOne({ username: inparam.username })
    // 账号不存在默认创建
    if (!user) {
        user = {
            _id: Date.now().toString(36),
            username: inparam.username,
            createdAt: Date.now(),
            createdAtStr: moment().format('YYYY-MM-DD HH:mm:ss')
        }
        await mongodb.collection(COLLECTION.USER).insertOne(user)
    }

    // 生成TOKEN返回
    user.id = user._id
    user.token = jwt.sign({ id: user._id, role: 'user' }, config.auth.secret)
    ctx.body = { err: false, res: user }
    return next()
})

module.exports = router