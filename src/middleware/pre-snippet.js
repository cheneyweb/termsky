// 路由相关
const router = new Router()
// 工具相关

router.post('/snippet/create', async (ctx, next) => {
    const token = ctx.tokenVerify
    let inparam = ctx.request.body
    inparam.groupId = inparam.groupId || 'N'
    return next()
})

router.post('/snippet/delete', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

router.post('/snippet/update', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

router.get('/snippet/feed', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

module.exports = router