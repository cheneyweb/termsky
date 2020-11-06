// 路由相关
const router = new Router()
// 工具相关

router.post('/profile/create', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

router.post('/profile/delete', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

router.post('/profile/update', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

router.get('/profile/feed', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

module.exports = router