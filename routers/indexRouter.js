const express = require('express');
const router = express.Router();
//GET / 欢迎页面
router.get('/',(req,res)=>{
    res.render('welcome');
});
//GET / chatroom 聊天室页面
router.get('/chatroom',(req,res)=>{
    // 判断是否有登录
    if(req.session.auth){
    //登陆了
    res.render('chatroom',{username:req.session.auth.username}) ;
    }else{
    req.session.redirect = req.url    
    // 没有登录返回到登录页面
        res.redirect('/login'); 
    }
});
// GET /posts 帖子列表页面
router.get('/posts',(req,res)=>{
     // 判断是否有登录
     if(req.session.auth){
        //登陆了
        res.render('post/index')
        }else{
            req.session.redirect = req.url   
             // 没有登录返回到登录页面
            res.redirect('/login'); 
        }
   
});
// GET / login 登录页面
router.get('/login',(req,res)=>{
    res.render('login')
});
module.exports = router;