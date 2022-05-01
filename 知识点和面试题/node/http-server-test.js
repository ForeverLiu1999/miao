const http = require ('http');

const server = http.createServer ();

// 也可以createServer直接传进去一个函数,直接传入的函数将被绑定在request事件.
// var server = http.createServer(function (request, response) {

// });

// 当http服务器对象接到一个请求就会触发一个事件,那么事件的回调函数就会运行.
// 抽象成请求对象req和响应对象res.
// 从请求对象可以读取到客户端请求的相关信息:请求方法 请求地址 请求头.
// 从响应对象可以读取响应状态码 响应头 响应体.
server.on ('request', (req, res) => {
  console.log(req.method, req.url);

  // 头部
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=UTF-8'
  })

  res.write('')


})
// 监听
server.listen(8899, () => {
  console.log('listening 8899');
})