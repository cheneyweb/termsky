// 路由相关
const router = new Router()
// 工具相关

router.post('/snippet/create', async (ctx, next) => {
    const token = ctx.tokenVerify
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

router.get('/snippet/get/:id', async (ctx, next) => {
    const token = ctx.tokenVerify
    let res = ctx.body.res
    if (res && res.groupId) {
        res.group = await mongodb.collection(COLLECTION.GROUP).findOne({ _id: res.groupId })
    }
    return next()
})

module.exports = router