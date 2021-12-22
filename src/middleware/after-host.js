// 路由相关
const router = new Router()
// 工具相关


router.post('/host/create', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

router.post('/host/delete', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

router.post('/host/update', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

router.get('/host/feed', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

router.get('/host/get/:id', async (ctx, next) => {
    const token = ctx.tokenVerify
    let res = ctx.body.res
    if (res && res.profileId) {
        let p1 = mongodb.collection(COLLECTION.GROUP).findOne({ _id: res.groupId })
        let p2 = mongodb.collection(COLLECTION.PROFILE).findOne({ _id: res.profileId })
        let [group, profile] = await Promise.all([p1, p2])
        res.group = group
        res.profile = profile
    }
    return next()
})

module.exports = router