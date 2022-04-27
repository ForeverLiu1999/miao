const net = require('net');
const server = net.createServer();

server.on('connection', (conn) => {
  // 同步写法,如果第首个请求未执行完,后续请求会堆积.
  // var a = fs.readFileSync ('xxx.mp4');

  // 异步写法
  // 但这种TCP解析仍然有问题
  // 如果浏览器data头部数据没有一次都发过来,比如一秒钟发一个字符,那一秒钟就会触发一次事件,是不能接受的.
  conn.on('data', data => {
    // 接受浏览器请求,请求头,请求方法,请求体.
    var head = data.toString();
    var lines = head.split('\n');
    var [head, ...headers] = lines;


    if (xxx) {
      // 给浏览器的响应
      // 按照http报文格式
      conn.write('HTTP/1.1 200 OK\r\n');
      conn.write('\r\n');
      conn.write('<网页>');
    }

  })
})