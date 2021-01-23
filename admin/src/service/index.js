// import { URL, httpType } from "./urlConfig"
import { message } from 'ant-design-vue'
import store from "../store"

const PROTOCOL = 'http://'
const DOMAIN = 'localhost:3636'

// 全局消息配置
message.config({
    // top: `100px`,
    duration: 1,
    maxCount: 2,
})

// FETCH请求包装
const axios = {
    async get(url, params) {
        return new Promise(async (resolve, reject) => {
            if (params) {
                let paramsArray = [];
                //拼接参数  
                Object.keys(params).forEach(key => {
                    params[key] && paramsArray.push(key + '=' + params[key])
                })
                if (url.search(/\?/) === -1) {
                    url += '?' + paramsArray.join('&')
                } else {
                    url += '&' + paramsArray.join('&')
                }
            }
            try {
                let res = await fetch(`${PROTOCOL}${DOMAIN}${url}`, {
                    headers: {
                        // 'token': store.state.login.infos.token ? store.state.login.infos.token : null
                    }
                })
                let obj = await res.json()
                if (obj.err) {
                    // if (obj.err == 401) {
                    //     store.dispatch('logout')
                    // }
                    message.error(obj.res)
                    reject(obj)
                } else {
                    resolve(obj)
                }
            } catch (error) {
                message.warning('INTERNET ERROR')
                reject(error)
            }
        })
    },
    post(url, data) {
        return new Promise(async (resolve, reject) => {
            try {
                let res = await fetch(`${PROTOCOL}${DOMAIN}${url}`, {
                    body: JSON.stringify(data),
                    headers: {
                        'content-type': 'application/json; charset=utf-8',
                        // 'token': store.state.login.infos.token ? store.state.login.infos.token : null
                    },
                    method: 'POST'
                })
                let obj = await res.json()
                if (obj.err) {
                    // if (obj.err == 401) {
                    //     store.dispatch('logout')
                    // }
                    // reject(obj)
                }
                // else {
                resolve(obj)
                // }
            } catch (error) {
                message.warning('INTERNET ERROR')
                reject(error)
            }
        })
    }
}

export function httpRequest(method, url, params) {
    if (method == 'get') {
        return axios.get(url, params);
    } else if (method == 'post') {
        return axios.post(url, params);
    }
}

// 发邮件验证码
export function sendCode(params) {
    return axios.get("/xserver/user/code", params);
}

// 登录
export async function login(params) {
    let res = await axios.post("/xserver/user/login", params)
    if (!res.err) {
        store.commit("login", res.res)
        message.success("welcome")
    } else {
        message.error("login failed")
    }
    return res
}

// 新增HOST
export function createHost(params) {
    return axios.get("/xnosql/host/create", params);
}
// 更新HOST
export function updateHost(params) {
    return axios.get("/xnosql/host/update", params);
}
// 查询HOST
export function queryHost(params) {
    return axios.get('/xnosql/host/query', params);
}
// 删除HOST
export function deleteHost(id) {
    return axios.post(`/xnosql/host/delete/${id}`);
}

// 新增Profile
export function createProfile(params) {
    return axios.get("/xnosql/profile/create", params);
}
// 更新Profile
export function updateProfile(params) {
    return axios.get("/xnosql/profile/update", params);
}
// 查询Profile
export function queryProfile(params) {
    return axios.get('/xnosql/profile/query', params);
}
// 删除Profile
export function deleteProfile(id) {
    return axios.post(`/xnosql/profile/delete/${id}`);
}

// 新增Snippet
export function createSnippet(params) {
    return axios.get("/xnosql/snippet/create", params);
}
// 更新Snippet
export function updateSnippet(params) {
    return axios.get("/xnosql/snippet/update", params);
}
// 查询Snippet
export function querySnippet(params) {
    return axios.get('/xnosql/snippet/query', params);
}
// 删除Snippet
export function deleteSnippet(id) {
    return axios.post(`/xnosql/snippet/delete/${id}`);
}