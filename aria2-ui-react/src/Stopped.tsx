import { useRef, useState } from "react";
import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { SelectedTasksContext, useTasks2 } from "./hooks";
import { IProps } from "./NewTask";
import { RefObject } from "react";

// 通过一层抽象更容易理解.
// type SetStateAction<T> = T | ((v: T) => T) // 联合类型要用括号括起来,SetStateAction是用来传给setVal函数的类型.
// type UseStateReturnType<T> = [T, (v: SetStateAction<T>) => void]

// // useState类型声明,注释掉'import { useState } from "react"',看类型声明是否生效.
// function useState<T>(initVal: T): UseStateReturnType<T> {
//   var val: T = initVal // 设置初始值.
//   function setVal(v: SetStateAction<T>): void { // 无返回值.

//   }
//   return [val, setVal] // val的类型是一个number,而setVal的类型是一个函数.
// }

function Stopped({ client }: IProps, ref: React.Ref<any>) { // 确认ref类型是一个对象而不是函数
  // var tasksContext = useContext(SelectedTasksContext) // 从上层取到 对象格式:{selectedTasks: [], setSelectedTasks: f}

  var [selectedGids, setSelectedGids] = useState<string[]>([])
  var gidRef = useRef<string[]>()
  gidRef.current = selectedGids

  function selectTask(e: any, gid: string) {
    var gids // 将即将setSelectedGids的最新变量存入gids
    if (e.target.checked) {
      gids = [...selectedGids, gid]
      // 如果元素在change之后钩中了,那就应该把task添加进去.
    } else {
      gids = selectedGids.filter(it => it !== gid)
    }
    setSelectedGids(gids)
    // 类型守卫限制ref类型为对象
    if (typeof ref === "object") {
      ref?.current?.onSelectedTaskChanged?.(
        gids.map(gid => {
          return tasks.find(task => task.gid === gid)
        }).filter(it => it)
      ) // 这里的ref类型必须是一个对象
    }
  }

  useImperativeHandle(ref, () => ({ // 第二个参数是一个函数返回一个对象,返回的对象挂载在ref上.
    selectAll: function () { // 全选
      // tasksContext.setSelectedTasks(tasks) // 为了向上层组件传递选中的任务
      setSelectedGids(tasks.map(it => it.gid)) // 为了切换下方的多选框把每一个gid都存到selectedGids上
    },

    // getSelectedTasks (){
    //   return selectedGids.map(gid => { // map把一个id映射为一个任务
    //     return tasks.find(task => task.gid === gid) // 拿到一个gid就在tasks里边去找task本身
    //   }).filter(it => it) // 如果找不到就是空,空值可以过滤掉.
    // },

    onSelectedTaskChange: null
  }), [])

  // var [count, setCount] = useState<string>('abcd') // useState是一个泛型函数,number是一个类型参数,表示useState是一个number类型.0是唯一参数,类型也是number.
  // var setCount: (v: SetStateAction<string>) => void
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
              <input type="checkbox" checked={selectedGids.includes(task.gid)} onChange={(e) => selectTask(e, task.gid)} />
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

export default forwardRef(Stopped)

