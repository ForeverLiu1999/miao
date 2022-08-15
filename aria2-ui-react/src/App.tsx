import React, { useMemo } from 'react';
import './App.css';
import { HashRouter, NavLink, Routes, Route } from 'react-router-dom'

import Aria2Client from './aria2-client';
import Downloading from './Downloading';
import Waiting from './Waiting';
import NewTask from './NewTask';
import Header from './Header';
import Stopped from './Stopped';
import { useState } from 'react';
import TaskDetail from './TaskDetail';
import { SelectedTasksContext } from './hooks';
import { useRef } from 'react';
import Settings from './Settings';
import Servers from './Servers';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// @ts-ignore 让typescript不再检查这一行
globalThis.Aria2Client = Aria2Client;

function App() {
  var currentServerIdx = useMemo(() => localStorage.currentServerIdx ?? 0, []); // 如果不存在就用0,从localStorage里边读一次以后就不用变了.

  var aria2Servers = useMemo(() => {
    return JSON.parse(localStorage.ARIA2_SERVERS ?? '[]')
  }, [])

  // console.log(localStorage.ARIA2_SERVERS)

  var [connectState, setConnectState] = useState("连接中...")
  var [selectedIdx, setSelectedIdx] = useState(currentServerIdx)
  var [globalStat, setGlobalStat] = useState<any>({
    numActive: '0',
    numWaiting: '0',
    numStoppedTotal: '0',
    uploadSpeed: '0',
    downloadSpeed: '0'
  })

  // var aria2Servers = useMemo(() => { // 从localStorage取出的已经保存的服务器.
  //   return JSON.parse(localStorage.ARIA2_SERVERS ?? "[]"); // 传一个字符串,解析为空数组.
  // }, [])

  var [aria2, setAria2] = useState(
    useMemo(() => {
      var server = aria2Servers[currentServerIdx]
      console.log(server, aria2Servers)
      var aria2 = new Aria2Client(server.ip, server.port, server.secret)
      return aria2
    }, [])
  )

  useEffect(() => {
    aria2.ready().then(() => { // ready可以让无论绑定成功还是失败都能没问题.
      setConnectState(connState => {
        if (connState == '连接中...') {
          return '已连接'
        } else {
          return connState
        }
      })
    }, () => {
      setConnectState(connState => {
        if (connState == '连接中...') {
          return '连接失败'
        } else {
          return connState
        }
      })
    })

    // 监听setInterval应该在ready之后
    var id: NodeJS.Timer // setInterval返回值类型是NodeJS.Timer
    aria2.ready().then(() => {
      id = setInterval(() => {
        console.log('timer...')
        // @ts-ignore
        aria2.getGlobalStat().then(stat => {
          setGlobalStat(stat)
        })
      }, 1000)
    })

    async function onComplete(taskInfo: any) {
      // @ts-ignore
      var task = await aria2.tellStatus(taskInfo.gid)
      toast('有任务下载完成了.', task.files[0].path) // 显示信息.
      }
      aria2.on('DownloadComplete', onComplete)

      return () => {
        clearInterval(id)
        aria2.off('DownloadComplete', onComplete)
        aria2.destroy() // 解绑事件的同时还应该销毁aria2对象,如里边的websocket连接.
      }
    }, [aria2])

  var [selectedTasks, setSelectedTasks] = useState([])

  var listComp = useRef()

  function changeServer(e: React.ChangeEvent<HTMLSelectElement>) { // 把旧的服务器关掉,往下层传递一个新的aria2对象,
    var idx = e.target.value // 从select元素中选择一个下标.
    setSelectedIdx(idx) // 设置一下就可以点击改变.
    localStorage.currentServerIdx = idx // 放进localStorage以便于下次读出来.
  }

  useEffect(() => {
    var serverInfo = aria2Servers[selectedIdx]
    setConnectState('连接中...')
    var aria2 = new Aria2Client(serverInfo.ip, serverInfo.port, serverInfo.secret)
    setAria2(aria2)
  }, [selectedIdx])


  return (
    // Context.provider的用法就是在组件上一层包起来.
    <SelectedTasksContext.Provider value={{ selectedTasks, setSelectedTasks }}>
      <ToastContainer />
      <HashRouter>
        <div className="App">
          <div className="App-left">
            {/* 就地写select元素的change事件,就地写的好处是不用传给别人,不需要考虑类型问题. */}
            <select onChange={changeServer} value={selectedIdx}>
              {
                aria2Servers.map((server: any, idx: number) => {
                  return <option key={idx} value={idx}>{server.ip}:{server.port}</option> // server对象的ip属性.
                })
              }
            </select>
            <div>{connectState}</div>
            <div><NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} to="/downloading">下载中({globalStat.numActive})</NavLink></div>
            <div><NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} to="/wating">等待中({globalStat.numWaiting})</NavLink></div>
            <div><NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} to="/stopped">已完成({globalStat.numStoppedTotal})</NavLink></div>
            <div><NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} to="/settings">设置</NavLink></div>
            <div><NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} to="/servers">服务器</NavLink></div>
            <hr />
            <div>上传: {globalStat.uploadSpeed} B/s</div>
            <div>下载: {globalStat.downloadSpeed} B/s</div>
          </div>
          <div className="App-right">
            <div className="App-header">
              <Header listComp={listComp} />
            </div>
            <div>
              <Routes>
                {/* Downloading要接属性需要去Downloading.tsx文件进行声明 */}
                <Route path='/downloading' element={<Downloading client={aria2} />}>
                </Route>
                <Route path='/wating' element={<Waiting client={aria2} />}>
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
        </div>
      </HashRouter >
    </SelectedTasksContext.Provider>
  )
}

export default App;
