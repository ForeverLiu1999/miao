import React from 'react'

// import logo from './logo.svg';
import './App.css';

// 让我们使用我们的新组件
// import在 , 的顶部添加更多语句App.js以导入它们。
// 然后，更新return语句，App()以便它呈现我们的组件。
import FilterButton from './components/FilterButton'
import Form from './components/Form'

import Todo from './components/Todo'

// 在我们的App()组件函数的顶部，创建一个名为的函数，addTask()它有一个参数name：
function addTask(name) {
  alert(name);
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {/* Edit <code>src/App.js</code> and save to reload. */}
//           This is my duty!

//         </p>
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//         <a
//         href='https://baidu.com'
//         target="_blank"
//         rel="noopener noreferrer"
//         >
//           www.baidu.com
//         </a>
//       </header>
//     </div>
//   );
// }

// function App(props) {
//   const subject = props.subject;
//   // console.log(props);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello, {subject}!
//         </p>
//       </header>
//     </div>
//   );
// }

function App(props) {
  // const taskList = props.tasks?.map(task => task.name);

  // const taskList = props.tasks.map(task => <Todo />);

  // const taskList = props.tasks.map(task => (
  //   <Todo id={task.id} name={task.name} completed={task.completed} />
  // ));

  // 唯一键
  const taskList = props.tasks.map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  )
);


  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      {/* <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form> */}

      <Form/>

      <div className="filters btn-group stack-exception">
        {/* <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button> */}

        <FilterButton/>
        <FilterButton/>
        <FilterButton/>

      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul

// The element ul has an implicit role of list. Defining this explicitly is redundant and should be avoided
        // role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {/* <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li> */}

        {/* <Todo name = "Eat" completed = {true} id = "todo-0"/>
        <Todo name = "Sleep" completed = {false} id = "todo-1"/>
        <Todo name = "Repeat" completed = {false} id = "todo-2"/> */}

        {taskList}
      </ul>
    </div>
  );
}


export default App;
