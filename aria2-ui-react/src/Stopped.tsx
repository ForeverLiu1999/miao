// import { useState } from "react";
import { Link } from "react-router-dom";
import { useTasks2 } from "./hooks";
import { IProps } from "./NewTask";

 // 通过一层抽象更容易理解.
type SetStateAction<T> = T | ((v: T) => T) // 联合类型要用括号括起来,SetStateAction是用来传给setVal函数的类型.
type UseStateReturnType<T> = [T, (v: SetStateAction<T>) => void]

// useState类型声明,注释掉'import { useState } from "react"',看类型声明是否生效.
function useState<T>(initVal: T): UseStateReturnType<T> {
  var val: T = initVal // 设置初始值.
  function setVal(v: SetStateAction<T>): void { // 无返回值.

  }
  return [val, setVal] // val的类型是一个number,而setVal的类型是一个函数.
}

export default function Stopped({client}: IProps) {

var [count, setCount] = useState<string>('abcd') // useState是一个泛型函数,number是一个类型参数,表示useState是一个number类型.0是唯一参数,类型也是number.

var setCount: (v: SetStateAction<string>) => void

// setCount = ('abcd')

  var tasks = useTasks2(async () => {
    await client.ready()
    // @ts-ignore
    return client.tellStopped(0, 100)
  }, 1000)

  return (
    <div>
      已停止...
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
              |
              <Link to={"/task/detail/" + task.gid}>详情</Link>
            </li>
          })
        }
      </ul>
    </div>
  )
}