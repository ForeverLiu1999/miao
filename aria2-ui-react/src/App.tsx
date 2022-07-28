import React, { useMemo } from 'react';
import './App.css';
import { HashRouter, NavLink, Routes, Route } from 'react-router-dom';

import Downloading from './Downloading';
import Waiting from './Downloading';
import NewTask from './NewTask';
import Header from './Header';
// import { useEffect } from 'react';

import client from './aria2-client'; // 手动创建连接aria2

// @ts-ignore 让typescript不再检查这一行
globalThis.client = client;

function App() {

  return (
    <HashRouter>
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
            <Route path='/downloading' element={<Downloading />}>
            </Route>
            <Route path='/waiting' element={<Waiting />}>
            </Route>
            <Route path='/new' element={<NewTask />}>
            </Route>
          </Routes>
        </div>
      </div>
    </HashRouter >
  )
}

export default App;
