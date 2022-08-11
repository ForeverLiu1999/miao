import React, { useMemo, useState, Component, useRef } from 'react';
import './App.css';
import { HashRouter, NavLink, Routes, Route } from 'react-router-dom';

import Downloading from './Downloading';
import Waiting from './Downloading';
import NewTask from './NewTask';
import Header from './Header';
import Stopped from './Stopped';
import Aria2Client from './aria2-client'; // 手动创建连接aria2
import TaskDetail from './TaskDetail';
import { SelectedTasksContext } from './hooks';
import Settings from './Settings';
import Servers from './Servers';

// @ts-ignore 让typescript不再检查这一行
globalThis.Aria2Client = Aria2Client;

function App() {
  var curentServerIdx = useMemo(() => localStorage.currentServerIdx ?? 0, []); // 如果不存在就用0,从localStorage里边读一次以后就不用变了.

  var aria2Servers = useMemo(() => { // 从localStorage取出的已经保存的服务器.
    return JSON.parse(localStorage.ARIA2_SERVERS ?? "[]"); // 传一个字符串,解析为空数组.
  }, [])

  var [aria2, setAria2] = useState(
    useMemo(() => {
      var server = aria2Servers[curentServerIdx]
      var aria2 = new Aria2Client(server.ip, server.port, server.secret)
      return aria2
    }, [])
  )

  var [selectedTasks, setSelectedTasks] = useState([])

  var listComp = useRef()



  function changeServer(e: React.ChangeEvent<HTMLSelectElement>) { // 把旧的服务器关掉,往下层传递一个新的aria2对象,
    var idx = e.target.value
    var server = aria2Servers[idx]
    setAria2(new Aria2Client(server.ip, server.port, server.secret))
  }

  return (
    // Context.provider的用法就是在组件上一层包起来.
    <SelectedTasksContext.Provider value={{ selectedTasks, setSelectedTasks }}>
      <HashRouter>
        <div className="App">
          <div className="App-left">
            <select onChange={(e) => changeServer(e)} value={0}>
              {
                aria2Servers.map((server: any, idx: number) => {
                  return <option key={server.ip} value={idx}>{server.ip}</option> // server对象的ip属性.
                })
              }
            </select>
            <div><NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} to="/downloading">下载中</NavLink></div>
            <div><NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} to="/waiting">等待中</NavLink></div>
            <div><NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} to="/stopped">已完成</NavLink></div>
            <div><NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} to="/settings">设置</NavLink></div>
            <div><NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} to="/servers">服务器</NavLink></div>
            {/* <div><NavLink to="/new">新建任务</NavLink></div> */}
          </div>
          <div className="App--right">
            <div className="App-header">
              <Header listComp={listComp} />
            </div>
          </div>
          <div>
            <Routes>
              {/* Downloading要接属性需要去Downloading.tsx文件进行声明 */}
              <Route path='/downloading' element={<Downloading client={aria2} />}>
              </Route>
              <Route path='/waiting' element={<Waiting client={aria2} />}>
              </Route>
              <Route path='/stopped' element={<Stopped ref={listComp} client={aria2} />}>
              </Route>
              <Route path='/new' element={<NewTask client={aria2} />}>
              </Route>
              <Route path='/settings' element={<Settings client={aria2} />}>
              </Route>
              <Route path='/servers' element={<Servers />}>
              </Route>
              <Route path='/task/detail/:gid' element={<TaskDetail client={aria2} />}>
              </Route>
            </Routes>
          </div>
        </div>
      </HashRouter >
    </SelectedTasksContext.Provider>
  )
}

export default App;
