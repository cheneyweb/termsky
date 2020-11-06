const moment = require("moment")

// 路由相关
const router = new Router()

/**
 * 注册
 */
router.post('/reg', async (ctx, next) => {
    let inparam = ctx.request.body
    let user = await mongodb.collection(COLLECTION.USER).findOne({ username: inparam.username })
    if (user) {
        ctx.body = { err: true, res: '账号已存在' }
        return next()
    } else {
        let user = {
            _id: Date.now().toString(36),
            username: inparam.username,
            password: inparam.password,
            createdAt: Date.now(),
            createdAtStr: moment().format('YYYY-MM-DD HH:mm:ss')
        }
        await mongodb.collection(COLLECTION.USER).insertOne(user)
        user.id = user._id
        user.token = jwt.sign({ id: user._id, role: 'user' }, config.auth.secret)
        delete user.password
        ctx.body = { err: false, res: user }
        return next()
    }
})

/**
 * 登录
 */
router.post('/login', async (ctx, next) => {
    let inparam = ctx.request.body
    let user = await mongodb.collection(COLLECTION.USER).findOne({ username: inparam.username, password: inparam.password })
    if (!user) {
        ctx.body = { err: true, res: '账号不存在' }
        return next()
    } else {
        user.id = user._id
        user.token = jwt.sign({ id: user._id, role: 'user' }, config.auth.secret)
        ctx.body = { err: false, res: user }
        return next()
    }
})

module.exports = router