var koa = require('koa');
var app = new koa();

const  serve = require("koa-static");
//app.use(serve("E:/fanndytang.github.io/client/static/md",{ extensions: ['html']}));
//app.use(serve("E:/fanndytang.github.io/react/dist",{ extensions: ['html']}));
app.use(serve("c:/users/fanhuanhuan/desktop/APPH5",{ extensions: ['html']}));

app.listen(4000);