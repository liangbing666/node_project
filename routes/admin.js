var express = require('express');
var router = express.Router();


// 引入后台控制器
var adminController = require('../controllers/adminControllers');


//登陆的页面
router.get('/login',adminController.login);
//退出登录
router.get('/logout',adminController.logout);
//登录操作
router.post('/doLogin',adminController.doLogin);
//验证码接口
router.get('/code',adminController.code);

/* 首页 */
router.get('/',adminController.Index);
// 添加栏目
router.get('/itemAdd', adminController.itemAdd);
// 插入分类数据
router.post('/itemInsert', adminController.itemInsert);
// 栏目列表
router.get('/itemList', adminController.itemList);
// 修改栏目页面
router.get('/itemEdit/:_id',adminController.itemEdit);
// 修改栏目数据
router.post('/itemUpdate',adminController.itemUpdate);
// 删除栏目
router.get('/itemRemove/:_id', adminController.itemRemove);





// 发布文章
router.get('/articleAdd',adminController.articleAdd);
// 插入文章数据
router.post('/articleInsert',adminController.articleInsert);
// 文章列表
router.get('/articleList', adminController.articleList);
// 删除文章
router.get('/articleRemove/:_id', adminController.articleRemove);
// 编辑文章
router.get('/articleEdit/:_id', adminController.articleEdit);
// 修改文章的文本
router.post('/articleUpdate', adminController.articleUpdate);
// 修改文章的封面
router.post('/articleUpdateImage', adminController.articleUpdateImage);




// 添加栏目
router.get('/friendAdd', adminController.friendAdd);
// 插入分类数据
router.post('/friendInsert', adminController.friendInsert);
// 栏目列表
router.get('/friendList', adminController.friendList);
// 修改栏目页面
router.get('/friendEdit/:_id',adminController.friendEdit);
// 修改栏目数据
router.post('/friendUpdate',adminController.friendUpdate);
// 删除栏目
router.get('/friendRemove/:_id', adminController.friendRemove);



module.exports = router;