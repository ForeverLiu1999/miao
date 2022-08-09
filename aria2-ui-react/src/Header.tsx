import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SelectedTasksContext } from "./hooks";

interface IProps {
  listComp: any
}

export default function Header ({listComp}: IProps) {
  var navigate = useNavigate()
  var tasksContext = useContext(SelectedTasksContext)

  function selectAll() {
    listComp.current.selectAll()
  }

  function goNew () {
    navigate('/new')
  }

  return (
    <div>
      <button onClick={goNew}>新建下载</button>
      <button hidden={tasksContext.selectedTasks.length <= 0}>删除任务</button>
      <button>清空已完成任务</button>
      <button onClick={selectAll}>全选</button>
    </div>
  )
}