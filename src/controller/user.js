// 路由相关
const Router = require('koa-router')
const router = new Router()

/**
 * 登录
 */
router.post('/login', async (ctx, next) => {
    let inparam = ctx.request.body
    let user = await mongodb.collection(COLLECTION.USER).findOne({ openid: inparam.userId })
    if (!user) {
        ctx.body = { err: true, res: '请绑定手机号' }
        return next()
    } else {
        user.id = user._id
        user.token = jwt.sign({ id: user._id, exp: Math.floor(Date.now() / 1000) + 3600 * 24 * 30 * 12, role: 'user' }, config.auth.secret)
        ctx.body = { err: false, res: user }
        return next()
    }
})

module.exports = router