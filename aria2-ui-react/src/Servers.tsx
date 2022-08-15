import { useMemo, useState } from "react"
import { useInput } from "./hooks"

export default function Servers() {
  var ip: any = useInput('')
  var port: any = useInput('')
  var secret: any = useInput('')

  var aria2Servers = useMemo(() => {
    return JSON.parse(localStorage.ARIA2_SERVERS ?? "[]"); // 传一个字符串,解析为空数组.
  }, [])

  var [servers, setServers] = useState(aria2Servers)

  function addServer() {
    var newServers = [...servers, { // 这里的ip port secret是对象,所以要取出对象的value属性.
      ip: ip.value,
      port: port.value,
      secret: secret.value
    }]

    setServers(newServers)

    console.log(newServers)
    localStorage.ARIA2_SERVERS = JSON.stringify(newServers) // 存入localStorage中.

    ip.clear()
    port.clear()
    secret.clear()
  }

  return (
    <div>
      <h2>服务器管理</h2>
      <ul>
        {
          servers.map((server: any, idx: number) => {
            return (
              <li key={idx}>
                <div>ip: {server.ip}</div>
                <div>port: {server.port}</div>
                <div>secret: {server.secret}</div>
              </li>
            )
          })
        }
      </ul>
      <form>
        <div>ip: <input type="text" {...ip} /></div>
        <div>port: <input type="text" {...port} /></div>
        <div>secret: <input type="text" {...secret} /></div>
        {/* form内的button如果不设置type,默认是submit,点击button就会提交form,所以要修改类型,当然也可以去掉form. */}
        <button onClick={addServer}>添加</button>
      </form>
    </div>
  )
}