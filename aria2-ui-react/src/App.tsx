import React, { useMemo, useState, Component } from 'react';
import './App.css';
import { HashRouter, NavLink, Routes, Route } from 'react-router-dom';

import Downloading from './Downloading';
import Waiting from './Downloading';
import NewTask from './NewTask';
import Header from './Header';
// import { useEffect } from 'react';

import Aria2Client from './aria2-client'; // 手动创建连接aria2

// @ts-ignore 让typescript不再检查这一行
globalThis.Aria2Client = Aria2Client;

function Test () {
  var [count, setCount] = useState(0)

  console.log('------', setCount)
  // @ts-ignore
  window.setCount = setCount

  return <button onClick={() => setCount(count + 1)}>{count}</button>
}

class Test2 extends Component {
  state = {
    count: 0
  }
  render () {
    return <button onClick={() => this.setState({count: this.state.count + 1})}>{this.state.count}</button>
  }
}

function App() {
  var aria2 = useMemo(() => new Aria2Client('127.0.0.1', '11000', '111222333'), [])

  var [show, setShow] = useState(true)

  return (
    <HashRouter>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <Test2/>}

      <div className="App">
        <div className="App-left">
          <div><NavLink to="/downloading">下载中</NavLink></div>
          <div><NavLink to="/waiting">等待中</NavLink></div>
          <div><NavLink to="/completed">已完成</NavLink></div>
          <div><NavLink to="/new">新建任务</NavLink></div>
        </div>
        <div className="App--right">
          <div className="App-header">
            <Header />
          </div>
        </div>
        <div>
          <Routes>
          {/* Downloading要接属性需要去Downloading.tsx文件进行声明 */}
            <Route path='/downloading' element={<Downloading  client={aria2}/>}>
            </Route>
            <Route path='/waiting' element={<Waiting client={aria2}/>}>
            </Route>
            <Route path='/new' element={<NewTask client={aria2}/>}>
            </Route>
          </Routes>
        </div>
      </div>
    </HashRouter >
  )
}

export default App;
