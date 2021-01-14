// import { URL, httpType } from "./urlConfig";
import { store } from "../store";

const PROTOCOL = 'http://'
const DOMAIN = 'localhost:3636'

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
                    // Message.warning(obj.res)
                    // if (obj.err == 401) {
                    //     store.dispatch('logout')
                    // }
                    reject(obj)
                } else {
                    resolve(obj)
                }
            } catch (error) {
                // Message.warning('网络连接错误')
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
                    // Message.warning(obj.res)
                    // if (obj.err == 401) {
                    //     store.dispatch('logout')
                    // }
                    reject(obj)
                } else {
                    resolve(obj)
                }
            } catch (error) {
                // Message.warning('网络连接错误')
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

// 登录
export async function login(params) {
    return axios.post("/xserver/agent/login", params);
}

