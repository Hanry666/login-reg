// 引入express
const express = require('express');
// 引入cors解决跨域问题
const cors = require('cors');
//创建应用对象
const app = express();
const bodyParser=require('body-parser')
const router = require('./router/user')
//挂载cors
app.use(cors());
// 在路由之前，封装 res.cc 函数
app.use((req, res, next) => {
    // status 默认值为 1，表示失败的情况
    // err 的值，可能是一个错误对象，也可能是一个错误的描述字符串
    res.cc = function (err, status = 1) {
      res.send({
        status,
        message: err instanceof Error ? err.message : err,
      })
    }
    next()
  })
  app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 注册路由模块，添加访问前缀
app.use('/', router)
// 监听端口，启动服务
app.listen(80, () => {
  console.log("服务已经启动, http://127.0.0.1:80 端口监听中...");
 })
