//前台的控制器
var indexController={};
//引入数据库模型模块
var itemModel = require('../models/itemModel');
var articleModel= require('../models/articleModel');

//首页
indexController.index=function(req, res, next) {
	//获取分类列标
	itemModel.find().sort({order:1}).exec(function(err,data){
        if (err) {
            console.log('数据添加数据库失败');
        } else {
            getArticleDataList(0)
        	// 根据 itemId 去查 10 条文章
        	function getArticleDataList(i){
        		articleModel.find({itemId:data[i]._id}).limit(6).exec(function(error,data1){
        			data[i].articleList = data1;
        			if(i < data.length - 1){
        				// 继续查询下一个栏目的 10 条文章
        				getArticleDataList(++i);
        			}else{	
			            // 已经是最后一个栏目了 直接 响应模版 分配数据
						res.render('index', { itemlist: data });
        			}
        		});
        	}
        }
    })
};




indexController.list = function(req,res){
	itemModel.find({_id:req.params._id}).exec(function(err,data){
		 if (err) {
            console.log('数据添加数据库失败');
        } else{
        	getArticleDataList(0)
        	// 根据 itemId 去查 10 条文章
        	function getArticleDataList(i){
        		articleModel.find({itemId:data[i]._id}).limit(100).populate('itemId',{name:1}).exec(function(error,data1){
        			data[i].articleList = data1;
        			if(i < data.length - 1){
        				// 继续查询下一个栏目的 10 条文章
        				getArticleDataList(++i);
        			}else{	
			            // 已经是最后一个栏目了 直接 响应模版 分配数据
						res.render('list', { itemlist: data,articlelist:data1});
        			}
        		});
        	}
        }
	})
}


indexController.content = function(req,res){
	itemModel.find({_id:req.params._id},function(err,data){
		 if (err) {
            console.log('数据添加数据库失败');
       } else{
				res.render('content', { data: data[0]});
        	}
       })
	}


module.exports = indexController;