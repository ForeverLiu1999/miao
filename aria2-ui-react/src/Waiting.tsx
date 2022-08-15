import { useTasks2 } from "./hooks"
import { IProps } from "./NewTask"

export default function Waiting({ client }: IProps) {
  var tasks = useTasks2(() => {
    return client.ready().then((client: any) => client.tellWaiting(0, 100))
  }, 1000)
  return <div>
    等待中...
    <ul>
      {
        tasks.map(task => {
          return <li key={task.gid}>
            {/* 下载路径 */}
            <span>{task.files[0].path}</span>
            |
            {/* 下载大小 */}
            <span>{task.completedLength}</span>
            |
            {/* 下载速度 */}
            <span>{task.downloadSpeed}B/s</span>
          </li>
        })
      }
    </ul>
  </div>
}