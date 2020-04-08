var express = require('express');
var router = express.Router();

// 引入前台控制器
var indexController = require('../controllers/indexControllers');

/*首页*/
router.get('/',indexController.index);
router.get('/list/:_id',indexController.list);
router.get('/content/:_id',indexController.content);


module.exports = router;
