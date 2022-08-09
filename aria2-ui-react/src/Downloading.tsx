import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Aria2Client from "./aria2-client"
import { useTasks, useTasks2 } from "./hooks"

// 想要接什么属性,就把属性的类型声明成一个接口."I"开头代表是一个接口.
interface IProps {
  client: Aria2Client
}

export default function Downloading({ client }: IProps) {
  // taks每秒更新
  var tasks = useTasks2(() => {
    return client.ready().then((client: any) => client.tellActive())
  }, 1000)

  return (
    <div>
      下载中...
      <ul>
        {
          tasks.map(task => {
            return <li key={task.gid}>

              <input type="checkbox" />
              {/* 下载路径 */}
              <span>{task.files[0].path}</span>
              |
              {/* 下载大小 */}
              <span>{task.completedLength}</span>
              |
              {/* 下载速度 */}
              <span>{task.downloadSpeed}B/s</span>
              |
              <Link to={"/>task/detail/" + task.gid}>详情</Link>
            </li>
          })
        }
      </ul>
    </div>
  )
}