// 简化 因为上边构造函数所有参数都直接放在this上,可以用private私有声明减少代码量.
export default class Aria2Client {
  addUris() {
    throw new Error("Method not implemented.");
  }
  ws: WebSocket;
  id: number;
  readyPromise: Promise<Aria2Client> // 希望resolve出对象自身的话,就要这样设置类型.

  // 为了使发送的请求和返回的响应可以一一对应,该对象记录每个id的请求对应的回调函数.
  // 内容为id => callback
  callbacks: {
    [id: number]: (data: any) => void
  } = {}

  // ts可以限定类型,private私有声明可以节省代码,不然ip port secret ws这些字段都要在上边先声明一遍.
  constructor(private ip: string = '127.0.0.1', public port: number | string, public secret: string) {
    var url = `ws://${ip}:${port}/jsonrpc` // 可以在jsonrpc连接的请求头中查看.
    this.ws = new WebSocket(url) // 创建webSocket连接.
    this.id = 1 // id从1开始,否则第一个就是0了.

    // 创建一个Promise等待连接成功的状态,对连接建立成功事件进行监听.
    this.readyPromise = new Promise(resolve => {
      this.ws.addEventListener('open', (e) => {
        resolve(this)
      })
    })

    // 不需要发一次监听一次,所以整个Client只需要监听一次message事件.
    this.ws.addEventListener('message', (e) => { // 这里必须用箭头函数的写法,这样可以绑定到aria2-client的this,否则'var callback = this.callbacks[id]'中的this会指向WebSocket,因为事件绑给WebSocket,this就指向它.
      var data = JSON.parse(e.data)
      // 响应回来要将根据data的id来找到谁发送的
      var id = data.id

      if (id) { // 有id时
        // 每当监听到message时
        var callback = this.callbacks[id]
        // 用完删除,就只会存储发出但未响应的回调
        delete this.callbacks[id]
        callback(data)
      } else { // 说明是事件,比如onDownloadStar, onDownloadError

      }

    })
  }

  ready() {
    return this.readyPromise
  }



  // 手动实现addUri方法
  // aria2 = new Aria2Client('127.0.0.1', '11000', '111222333');
  // var id = await aria2.addUri(['https://freetestdata.com/wp-content/uploads/2022/02/Free_Test_Data_5MB_AVI.avi'])
  // 即可添加下载任务
  // addUri(...args: any[]) {
  //   // 因为发请求接响应无论连接成功还是失败这都是一个异步操作都需要promise.
  //   return new Promise((resolve, reject) => {
  //     var id = this.id++;

  //     // 发送完之后得到一个回调函数.
  //     function callback(data: any) {
  //       if (data.error) {
  //         reject(data.error)
  //       } else {
  //         resolve(data.result)
  //       }
  //     }

  //     this.callbacks[id] = callback

  //     // 发送
  //     this.ws.send(JSON.stringify({
  //       jsonrpc: '2.0',
  //       id: id,
  //       method: 'aria2.addUri',
  //       // 给addUri传递的其他参数就跟在rpc调用的params的密码的后边.
  //       params: [`token:${this.secret}`, ...args]
  //     }))
  //   })
  // }
}

var aria2Methods = [
  "addUri",
  "addTorrent",
  "getPeers",
  "addMetalink",
  "remove",
  "pause",
  "forcePause",
  "pauseAll",
  "forcePauseAll",
  "unpause",
  "unpauseAll",
  "forceRemove",
  "changePosition",
  "tellStatus",
  "getUris",
  "getFiles",
  "getServers",
  "tellActive",
  "tellWaiting",
  "tellStopped",
  "getOption",
  "changeUri",
  "changeOption",
  "getGlobalOption",
  "changeGlobalOption",
  "purgeDownloadResult",
  "removeDownloadResult",
  "getVersion",
  "getSessionInfo",
  "shutdown",
  "forceShutdown",
  "getGlobalStat",
  "saveSession",
  // "system.multicall",
  // "system.listMethods",
  // "system.listNotifications",
]

aria2Methods.forEach(methodName => {
  //  var [, methodName] = methodName.split('.')

  // @ts-ignore
  Aria2Client.prototype[methodName] = function (...args: any[]) {
      return new Promise((resolve, reject) => {
        var id = this.id++;

        // 发送完之后得到一个回调函数.
        function callback(data: any) {
          if (data.error) {
            reject(data.error)
          } else {
            resolve(data.result)
          }
        }

        this.callbacks[id] = callback

        // @ts-ignore
        // 发送
        this.ws.send(JSON.stringify({
          jsonrpc: '2.0',
          id: id,
          method: 'aria2.' + methodName,
          // 给addUri传递的其他参数就跟在rpc调用的params的密码的后边.
          params: [`token:${this.secret}`, ...args]
        }))
    })
  }
})