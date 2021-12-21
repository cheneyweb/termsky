const COLLECTION = {
    USER: 'user',
    PROFILE: 'profile',
    GROUP: 'group',
    HOST: 'host',
    SNIPPET: 'snippet'
}

const ACTION = {
    NEW_CONNECT: 'NEW_CONNECT',             // 建立新连接
    NEW_CONNECT_SHELL: 'NEW_CONNECT_SHELL', // 建立新SHELL
    GET_CONNECT: 'GET_CONNECT',             // 获取连接
    COMMAND: 'COMMAND',                     // 执行命令
    CLOSE_CONNECT: 'CLOSE_CONNECT',         // 关闭连接
}

module.exports = {
    COLLECTION,
    ACTION
}