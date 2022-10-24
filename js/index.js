
function IsRight(){  //判断是否重复输入正确密码
   let user=document.querySelector('.reg_user');
   let pas01=document.querySelector('.reg_password').value;
   let pas02=document.querySelector('.reg_password_rep').value;
   if(!user)
   throw '用户名不能为空'
   if(!pas01)
   throw '密码不能为空'
   if(pas01!==pas02)
   throw '两次密码输入不同'
   if(pas01.length<8)
   throw '密码不能小于8位'
}
function axioslog(user,password){  //登录提交给后端
   axios({
    method:'POST',
    url:'http://127.0.0.1:80/login', //在此修改服务器
    data:{
       user, //用户名
       password   //密码
    } 
   }).then(res=>{
       if(res.data.status===0){
        alert('登录成功!')
       }else
       alert(res.data.message)
   }).catch(err=>{
       alert(err.message);
   })
}
function axiosreg(user,password){  //注册提交给后端
    axios({
        method:'POST',
        url:'http://127.0.0.1:80/reg', //在此修改服务器
        data:{
           user, //用户名
           password   //密码
        } 
       }).then(res=>{
        if(res.data.status===0){
            alert('注册成功!')
           }else
           alert(res.data.message)
       }).catch(err=>{
           alert('未知原因,注册失败!');
       })
}
window.addEventListener('load',()=>{
    let changebut=document.querySelector('.change'); //获取切换按钮
    let cover=document.querySelector('.cover');  //获取覆盖框
    let login=document.querySelector('.login_but'); //登录
    let reg=document.querySelector('.reg_but'); //注册
    changebut.addEventListener('click',(e)=>{   //注册登录切换
        if(e.target.innerText==='切换注册'){
            e.target.innerText='切换登录';
            cover.style.left='0';
            cover.style.borderRadius='30px 0 0 30px';
        }else{
            e.target.innerText='切换注册';
            cover.style.left='50%';
            cover.style.borderRadius='0 30px 30px 0';
        }
    })
    reg.addEventListener('click',()=>{  //注册提交给后端
        try{
           IsRight();
        }catch(err){
          return alert(err);
        }
        let user=document.querySelector('.reg_user').value;
        let password=document.querySelector('.reg_password').value;
        axiosreg(user,password);
    })
    login.addEventListener('click',()=>{  //登录提交给后端
        let user=document.querySelector('.login_user').value;
        let password=document.querySelector('.login_password').value;
        if(!user)
        return alert('用户名不能为空')
        if(!password)
        return alert('密码不能为空')
        axioslog(user,password);
    })
})