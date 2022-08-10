export default function Servers () {


  return (
    <div>
      <h2>服务器管理</h2>
      <ul>
        <li>列出服务器</li>
      </ul>
      <form>
        <div>ip: <input type="text" /></div>
        <div>port: <input type="text" /></div>
        <div>secret: <input type="text" /></div>
        <button>添加</button>
      </form>
    </div>

  )
}