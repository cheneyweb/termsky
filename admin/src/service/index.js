// import { URL, httpType } from "./urlConfig"
import { message } from 'ant-design-vue'
import { store } from "../store"

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
export function login(params) {
    return axios.post("/xserver/user/login", params)
}

