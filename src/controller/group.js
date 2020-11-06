// 路由相关
const router = new Router()

/**
 * 获取分组
 * @param type host/profile
 */
router.get('/query', async (ctx, next) => {
    let inparam = ctx.request.query

    let items = await mongodb.collection(inparam.type).find({}, { projection: { group: 1, _id: 0 } }).distinct('group').toArray()
    let groups = items.map(o => o.group)

    ctx.body = { err: false, res: groups }
})

module.exports = router