**需要安装的包**
npm i react-router-dom

## rpc (Remote Procedure Call) 远程过程调用 《Eloquent Javascript》书中HTTP章节,apreciating HTTP小节 A commonly used model is that of remote procedure calls.
另外一台计算机上的程序通过网络调用aria2所在计算机的一个函数,aria2启动后处于监听中,其中内置一系列函数,aria2监听一个端口,其他计算机可以通过网络端口来发送请求,请求体就是告诉aria2我要调用什么函数以及传递参数,aria2就可以返回一个对象或者数组,整个传递过程就是rpc.

**aria2优势以及特点**
其他命令行下载工具wget curl,加上url就可以下载,aria2也可以,但aria2在后台持续运行,无下载界面

## 模型
这是HTTP的以一种抽象结果,并没有把请求当成资源或是文件,而仅仅是当成一个通信的桥梁.另一种方案是建立基于协议的webSocket,那这个程序要调用什么函数就发一个消息,然后aria2服务器处理完这个调用得到调用结果之后响应回来一个消息,每个消息都有一个id,所以webSocket更像是两个人聊天,你说一句我说一句,重点在于发一回一.而TCP一次发送数据量过大的话,就要说好几次,而webSocket会把这份数据包裹起来解析成一个消息.
**比如**
封装为函数可以直接调用,但实际是这次调用并不在本地或者计算机上，而是发送请求到远程,等待响应结果被resolve出来放进x中,如var x = await rpc.substract(42, 19)
**而不是这样把HTTP当做通信桥梁去请求**:
var x = await fetch('/jsonrpc', {
  body: {
    jsonspc: '2.0',
    method: 'substract',
    params: [2, 4]
  }
})

## rpc发送格式标准
XML-RPC和JSON-RPC,后者更流行.
**比如JSON-RPC请求:**
{
    "jsonrpc" : 2.0,
    "method" : "sayHello",
    "params" : ["Hello JSON-RPC"],
    "id" : 1
}
sonrpc:定义JSON-RPC版本。
method:调用的方法名。
params:方法传入的参数，若无参数则为null。
id:调用标识符。可以为字符串，不推荐包含小数（不能准确二进制化），或为null（可能引起混乱）。
**JSON-RPC响应:**
{
    "jsonrpc" : 2.0,
    "result" : "Hell JSON-RPC",
    "error" : null,
    "id" : 1
}
jsonrpc:定义JSON-RPC版本。
result:方法返回值，调用成功时，不能为null，调用错误时，必须为null。
error:调用时错误，无错误返回null，有错误时则返回一个错误对象。
id:调用标识符，与调用方传入的标识一致，当请求中的id检查发生错误时（转换错误/无效请求），则必须返回null。
**注意同一连接id不能冲突,比如A计算机向aria2发出两次请求,id不能都为1,但A计算机和B计算机分别向aria2发出请求时,id可以都为1.**



## 运行
**第一步**<!-- http://ariang.mayswind.net/latest/#!/settings/ariang -->网页中配置aria2,AriaNg,别名任意,Aria2 RPC地址:本机ip(命令行中输入"ipconfig/all"),端口11000,Aria2 RPC协议WebSocket,密钥111222333,配置完成后左上角切换服务器.
**第二步**未全局安装,在文件夹下启动Git Bash,输入"./aria2c.exe --enable-rpc --rpc-listen-all --rpc-listen-port=11000 --rpc-secret=111222333", 资源监视器查看11000端口,对应aria2为未指定IPV4和IPV6地址,"--rpc-listen-all"默认只监听本机环回地址,但加了以后可以实现任意ip地址请求都能连接.
**注意**任务管理器-性能-资源监视器-侦听端口,找端口号为11000的地址,可以查看监听地址为IPV5和IPV6环回地址,
**第三步**返回网页,点击Aria2状态自动刷新,显示已连接.

**测试下载功能**
搜索download test files,或者直接进入"https://freetestdata.com/",选择Video Files,选择一个任意大小avi格式文件下载,在download按钮上右键复制链接地址,返回aria2网页新建下载任务把链接地址粘贴,点击立即下载。
可以在命令行界面看到下载任务已启动,以及下载信息.

****检查-NetWork-刷新网页,可以看到请求信息,名称:jsonrpc,类型webSocket,点击jsonrpc-Messages可以看到各种请求,可以查看每次请求调用了哪些方法.