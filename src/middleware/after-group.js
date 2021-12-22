// 路由相关
const router = new Router()
// 工具相关


router.post('/group/create', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

router.post('/group/delete/:id', async (ctx, next) => {
    const token = ctx.tokenVerify
    let groupId = ctx.params.id
    if (ctx.group) {
        await mongodb.collection(ctx.group.type.toLowerCase()).updateMany({ groupId }, { $set: { groupId: 'N' } })
    }
    return next()
})

router.post('/group/update', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

router.get('/group/feed', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

module.exports = router