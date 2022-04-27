const net = require ('net');
var conn = net.connect (80, 'www.baidu.com');
conn.on ('connect', () => {
  conn.write ('GET / HTTP/1.1\r\n\r\n');
  conn.end ();
})
console.on ('data', data => {
  console.log (data.toString ());
})

// 命令行中输入node进入node.js环境,然后.editor进入编辑模式并粘贴然后 ctrl + D完成输入,然后"conn.write ('GET / HTTP/1.1\r\n\r\n');"即可得到www.baidu.com的数据.
conn = net.connect (80, 'www.baidu.com');
conn.on ('data', data => {
  console.log (data.toString());
})