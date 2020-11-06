# xtermius

## WS数据协议-请求
>建立新SSH连接
```json
{
    "action":"NEW_CONNECT",
    "profileId":"配置ID"
}
```

>断开SSH连接
```json
{
    "action":"CLOSE_CONNECT",
    "sshConnId":"连接ID"
}
```

>获取SSH连接
```json
{
    "action":"GET_CONNECT",
    "sshConnId":"连接ID"
}
```

>命令交互
```json
{
    "action":"COMMAND",
    "sshConnId":"连接ID",
    "data":"交互文本"
}
```

## WS数据协议-响应
>响应SSH连接之连接建立
```json
{
    "action":"NEW_CONNECT",
    "result":"Y",
    "sshConnId":"连接ID"
}
```

>响应SSH连接之交互建立
```json
{
    "action":"NEW_CONNECT_SHELL",
    "result":"Y",
    "sshConnId":"连接ID"
}
```

>响应获取连接
```json
{
    "action":"GET_CONNECT",
    "result":"Y"
}
```

>响应命令交互
```json
{
    "action":"COMMAND",
    "sshConnId":"连接ID",
    "result":"输出信息流"
}
```

## API接口
>用户登录
```json
[POST] /xserver/user/login
{
    "account":"账号",
    "password":"密码"
}
```

>创建个人信息
```json
[POST] /xnosql/profile/create
{
    "group":"分组",
    "label":"文本标签",
    "username":"",
    "password":"",
    "passphrase":"",
    "privateKey":"",
    "publicKey":""
}
```

>创建Host信息
```json
[POST] /xnosql/host/create
{
    "group":"分组",
    "label":"文本标签",
    "address":"连接地址",
    "port":22,
    "profileId":"个人信息ID",
    "startSnippet":"启动脚本"
}
```

