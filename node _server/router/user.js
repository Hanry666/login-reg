const express = require('express')
// 引入路由模块
const router = express.Router()
// 引入数据库模块
const db=require('../db/index')

router.post('/login',(req,res)=>{
    console.log(req.body);  //输出
    const userinfo=req.body;
    let user=userinfo.user;
    let password=userinfo.password;
    const sql=`select password from user where name='${user}'`
    console.log(sql+'语句执行了');
    db.query(sql,(err,result)=>{
        if(err)
        return res.cc(err.message,1);
        if(result.length!=1)
        return res.cc('用户名输入错误!',1);
        console.log(result[0].password);
        if(result[0].password!==password){
            return res.cc('密码错误!',1);
        }
        res.cc('登录成功',0);
    })
})
router.post('/reg',(req,res)=>{
    const userinfo=req.body;
    let user=userinfo.user;
    let password=userinfo.password;
    let sql=`insert into user(name,password) values('${user}','${password}')`
    console.log(sql+'语句执行了');
    db.query(sql,(err,result)=>{
        if(err){
            if(err.message===`ER_DUP_ENTRY: Duplicate entry '${user}' for key 'user.name'`)
            return res.cc('用户名重复!请换个用户名',1);
            console.log(err);
            return res.cc(err,1);
        }
        res.cc('注册',0);
    })
})
module.exports=router;