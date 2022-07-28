import { useEffect, useInsertionEffect, useState } from "react"
import { Link } from "react-router-dom"
import  client from "./aria2-client"

// 想要接什么属性,就把属性的类型声明成一个接口."I"开头代表是一个接口.
interface IProps {
  client: Aria2Client
}

function useTasks(client: Aria2Client, interval: number) {
  var [tasks, setTasks] = useState<any[]>([])

  useEffect(() => {
    var id = setInterval(() => {
      client.ready().then(client => {
        // @ts-ignore
        client.tellActive().then(tasks => {
          setTasks(tasks)
        })
      })
    }, interval)


    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    // 因为useEffect是同步的,内部不能写异步函数,所以如果一定要用await可以这样写.
    // (async () => {
    //   (await client.ready()).then(client => {
    //     // ts-ignore
    //     client.tellActive().then(tasks => {
    //       setTasks(tasks)
    //       console.log(tasks)
    //     })
    //   })
    // })()

      client.ready().then(client => {
        // @ts-ignore
        client.tellActive().then(tasks => {
          setTasks(tasks)
          console.log(tasks)
        })
      })
  }, []) // 加一个空数组,否则useEffect中在组件加载好时获取任务,获取任务后setTasks更新,但更新又会触发useEffect,所以加一个空数组防止无限触发.

  return tasks
}

export default function Downloading({ client }: IProps) {
  // taks每秒更新
  var tasks = useTasks(client, 1000)

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
              <Link to={"/task/detail/" + task.gid}>详情</Link>
            </li>
          })
        }
      </ul>
    </div>
  )
}