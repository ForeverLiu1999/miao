import React from 'react';
import './App.css';
import { HashRouter, NavLink, Routes, Route } from 'react-router-dom';

import Downloading from './Downloading';
import Waiting from './Downloading';

import Aria2Client from './aria2-client'; // 手动创建连接aria2

// @ts-ignore 让typescript不再检查这一行
globalThis.Aria2Client = Aria2Client;

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="App-left">
          <div><NavLink to="/downloading">下载中</NavLink></div>
          <div><NavLink to="/waiting">等待中</NavLink></div>
          <div><NavLink to="/completed">已完成</NavLink></div>
        </div>
        <div className="App--right">
          <div className="App-header">
            <button>新建下载</button>
          </div>
          <div>
            <Routes>
              <Route path='/downloading' element={<Downloading />}>
              </Route>
              <Route path='/waiting' element={<Waiting />}>
              </Route>
              <Route path='/completed' >
              </Route>
            </Routes>
          </div>
        </div>

      </div>

    </HashRouter>
  );
}

export default App;
