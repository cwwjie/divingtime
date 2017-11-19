const koa = require('koa');
//xtemplate模板引擎对koa的适配
const xtpl = require('xtpl/lib/koa');
const Routes = require("./routes")
const static = require('koa-static');
const app = new koa();
const fs = require('fs');


//xtemplate模板渲染 http://book.apebook.org/minghe/koa-action/xtemplate/layout.html
xtpl(app, {
    //配置模板目录，指向工程的view目录
    views: './static'
});


// 配置路由进行拦截
app.use(Routes.routes());


// 开启静态资源一定要这样做的
app.use(static("static"));

// 当以上都未拦截到返回，就返回404页面
app.use((ctx, next)=>{
	switch (ctx.status) {
		case 404:
			ctx.body = '404'
		break
	}
	return next()
});

app.listen(8000);

console.log('端口已启动在 8000 端口');
