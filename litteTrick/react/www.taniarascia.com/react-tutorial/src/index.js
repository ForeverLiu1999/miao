import React, {Component} from 'react'
// import ReactDOM from 'react-dom'; 18不需要这么写了
import './index.css'
import App from './App'
import { createRoot } from 'react-dom/client'
const container = document.getElementById('root');
const root = createRoot(container);

const love = "family";

class Bpp extends Component {
  render () {
    return (
      <div className = "Bpp">
        <h1>This is my {love}!</h1>
      </div>
    )
  }
}

// 18不需要再ReactDOM.render(<App/>)了
// 先后顺序不同会覆盖
root.render(<App />,  document.getElementById('root'));
// root.render(<Bpp />);

