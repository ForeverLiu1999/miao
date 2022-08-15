import { useCallback } from "react"
import { useParams } from "react-router-dom"
import { useAsync } from "./hooks"
import { IProps } from "./NewTask"


export default function TaskDetail ({client}: IProps) {
  var params = useParams()

  // 异步操作,向服务器获取数据.
  var { pending, value: task } = useAsync(useCallback(async () => {
    // @ts-ignore
    var task =  await client.tellStatus(params.gid)
    return task
  },[]))

  if (task) {
  return <div>
      <div>
        <h3>总览:</h3>
        <div>任务名称: {task!.files[0].path}</div>
      </div>
      <div>
        <h3>区块信息</h3>
      </div>
      <div>
        <h3>总览</h3>
      </div>
    </div>
  }

  if (pending) {
    return <div>loading...</div>
  }

  return null
}