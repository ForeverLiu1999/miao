import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  listComp: any
}

export default function Header ({listComp}: IProps) {
  var navigate = useNavigate()

  var [selectedTasks, setSelectedTasks] = useState<any>([])

  console.log(listComp.current)

  useEffect(() => {
    if (listComp.current) {
      listComp.current.onSelectedTaskChanged = function (tasks: any) {
        setSelectedTasks(tasks)
      }
    }
    return () => {
      if (listComp.current) {
        listComp.current.onSelectedTaskChanged = null // 重新置空
      }
    }
  }, [listComp.current])

  function selectAll() {
    listComp.current.selectAll()
  }

  function goNew () {
    navigate('/new')
  }

  return (
    <div>
      <button onClick={goNew}>新建下载</button>
      <button hidden={selectedTasks.length <= 0}>删除任务</button>
      <button>清空已完成任务</button>
      <button onClick={selectAll}>全选</button>
    </div>
  )
}