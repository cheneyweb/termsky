export const drawer = {
    state: {
        // 抽屉显示状态
        isShowDrawerHost: false,
        // 存放数据
        // info: {}
    },
    mutations: {
        // 开关抽屉组件
        switchDrawer(state, params) {
            state[params.key] = !state[params.key]
        },
        // // 设置传入数据
        // setDrawerInfo(state, params) {
        //     state.info = params
        // },
    },
    actions: {

    }
};