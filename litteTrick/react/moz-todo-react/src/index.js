import React from 'react';

// 17
// import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// 18
import { createRoot } from 'react-dom/client'
const container = document.getElementById('root');
const root = createRoot(container);

// 17
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];


// console.log(DATA);


// ReactDOM.render(<App />, document.getElementById('root'));

// 18不需要再ReactDOM.render(<App/>)了
// root.render(<App tasks = {DATA}/>,  document.getElementById('root'));
// You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.
// 您向root.render的第二个参数传递了一个容器。您不需要再次传递它，因为您已经传递它来创建根。
root.render(<App tasks = {DATA}/>);


// ReactDOM.render(<App subject = "Clarice"/>, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
