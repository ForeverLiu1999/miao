import React, { useMemo, useState, Component } from 'react';
import './App.css';
import { HashRouter, NavLink, Routes, Route } from 'react-router-dom';

import Downloading from './Downloading';
import Waiting from './Downloading';
import NewTask from './NewTask';
import Header from './Header';
import Stopped from './Stopped';
import Aria2Client from './aria2-client'; // 手动创建连接aria2

// @ts-ignore 让typescript不再检查这一行
globalThis.Aria2Client = Aria2Client;

function App() {
  var aria2 = useMemo(() => new Aria2Client('127.0.0.1', '11000', '111222333'), [])
  return (
    <HashRouter>
      <div className="App">
        <div className="App-left">
          <div><NavLink style={({isActive}) => ({color: isActive ? 'red' : ''})} to="/downloading">下载中</NavLink></div>
          <div><NavLink style={({isActive}) => ({color: isActive ? 'red' : ''})} to="/waiting">等待中</NavLink></div>
          <div><NavLink style={({isActive}) => ({color: isActive ? 'red' : ''})} to="/stopped">已完成</NavLink></div>
          {/* <div><NavLink to="/new">新建任务</NavLink></div> */}
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
            <Route path='/stopped' element={<Stopped client={aria2}/>}>
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
