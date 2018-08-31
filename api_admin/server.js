var koa = require('koa');
var app = new koa();
var router = require('koa-router')();
var multer = require('koa-multer')

var goods = require('./router/goods')


// CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
const cors = require('koa2-cors');
const formidable = require("formidable");


// 具体参数我们在后面进行解释
app.use(cors({
    origin: function (ctx) {
        return 'http://localhost:8080'; /// 这样就能只允许 http://192.168.10.105:8080 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

router.post('/goods/save', async function (ctx) {
    var form = new formidable.IncomingForm();
    form.parse(ctx.req,async function(err,fields,files){
        if(err){throw err; return;}

        goods.save(fields)
    });
    ctx.body = 'success'
});
router.get('/goods/detail', async function (ctx) {
    ctx.body = {
        data: goods.detail(ctx.request.query)
    }
});
router.post('/goods/edit', async function (ctx) {
    var form = new formidable.IncomingForm();
    form.parse(ctx.req,async function(err,fields,files){
        if(err){throw err; return;}

        goods.edit(fields)
    });
    ctx.body = 'success'
});
router.post('/goods/del', async function (ctx) {
    var form = new formidable.IncomingForm();
    form.parse(ctx.req,async function(err,fields,files){
        if(err){throw err; return;}

        goods.del(fields)
    });
    ctx.body = 'success'
});
router.get('/goods/list', async function (ctx) {
    ctx.body = {
        data: goods.list()
    }
});


//  图片上传配置
var storage = multer.diskStorage({
    // 文件保存路径
    destination: function(req, file, cb) {
        cb(null, 'data/uploads/')
    },
    // 修改文件名称
    filename: function(req, file, cb) {
        var fileFormat = (file.originalname).split('.')
        cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1])
    }
})
// 加载配置
var upload = multer({storage: storage})
router.post('/upload', upload.single('file'), async function (ctx) {
    ctx.body = {
        filename: 'http://127.0.0.1:4000/data/uploads/' + ctx.req.file.filename
    }
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);