// 路由相关
const router = new Router()
// 工具相关


router.post('/profile/create', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

router.post('/profile/delete/:id', async (ctx, next) => {
    const token = ctx.tokenVerify
    let profileId = ctx.params.id
    await mongodb.collection(COLLECTION.HOST).updateMany({ profileId }, { $set: { profileId: 'N' } })
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

router.get('/profile/get/:id', async (ctx, next) => {
    const token = ctx.tokenVerify
    let res = ctx.body.res
    if (res && res.groupId) {
        res.group = await mongodb.collection(COLLECTION.GROUP).findOne({ _id: res.groupId })
    }
    return next()
})

module.exports = router