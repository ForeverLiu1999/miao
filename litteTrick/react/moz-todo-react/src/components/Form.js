// React在文件顶部导入，就像我们在Todo.js.
// 为自己创建一个Form()与 基本结构相同的新组件Todo()，然后导出该组件。
// <form>从内部复制标签和它们之间的所有内容App.js，并将它们粘贴到Form()的return语句中。
// Form在文件末尾导出。
import React, { useState } from "react";


// 在我们的App()组件函数的顶部，创建一个名为的函数，addTask()它有一个参数name：
function addTask(name) {
  alert(name);
}

const [name, setName] = useState('');


// 在Form()组件函数的顶部，创建一个名为handleSubmit(). 此功能应防止submit事件的默认行为。
// 之后，它应该触发一个alert()，它可以说出你想要的任何内容。它最终应该看起来像这样：
function handleSubmit (e) {
  e.preventDefault();
  // alert('Hello');
  props.addTask("Say hello!");
}

function Form(props) {
  return (
// 要使用handleSubmit函数，onSubmit请为元素添加一个属性<form>，并将其值设置为handleSubmit函数：
    <form onSubmit = {handleSubmit} addTask={addTask}>
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
        value = {name}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
