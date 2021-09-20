const http = require("http");
var server = http.createServer();
server.on("request", function(req, res) {
        //判断请求地址
        if (req.url == '/') {
            $msg = 'winter永远滴神';
        } else {
            $msg = '404';
        }


        //响应
        res.setHeader("Content-Type", "text/html;charset=utf-8");
        res.write($msg);
        res.end();

    })
    //启动服务
server.listen(8080, function() {
    console.log("服务启动成功：访问：localhost:8080");
})