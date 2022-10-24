# 给赵昱哲的注册登录

实现常规注册登录功能连接数据库

前端html css JavaScript

后端node.js

数据库mysql

## Build Setup

``` bash
# install dependencies
npm install
```

## datagrip配置

建表

```
create table user(
    id int primary key auto_increment comment 'id',
    name varchar(20) unique comment '账号' ,
    password varchar(20) comment '密码'
)comment '用户数据';
```

配置./node _server/db/index.js 中的数据库用户名密码
