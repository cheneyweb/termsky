export const user = {
    state: {
        id: '',
        username: '',
        token: '',
    },
    mutations: {
        // 用户登录
        login(state, params) {
            state.id = params.id
            state.username = params.username
            state.token = params.token
        },
        // 用户登出
        logout(state, params) {
            state.username = ''
            state.token = ''
        }
    },
    actions: {

    }
};