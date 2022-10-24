//导入mysql模块
const mysql = require('mysql');
//建立与Mysql数据库连接
const db = mysql.createPool({
  host: '127.0.0.1',  //数据库ip地址
  user: 'root',   //登录数据库的账号
  password: '111111',  //登录数据库的密码
  database: 'hanry',  //指定操作哪个数据库
})

module.exports =db;