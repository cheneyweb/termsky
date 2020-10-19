// 路由相关
const Router = require('koa-router')
const router = new Router()
// 工具相关
const { COLLECTION } = require('../util/consts.js')

router.post('/ssh/create', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

router.post('/ssh/delete', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

router.post('/ssh/update', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

router.get('/ssh/feed', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

module.exports = router