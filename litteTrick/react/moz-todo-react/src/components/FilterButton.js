// 执行与创建Form.jsinside相同的操作FilterButton.js，但调用组件并将元素FilterButton()内第一个按钮的 HTML 与 from 复制到语句中。<div>classfiltersApp.jsreturn
import React from "react";

function FilterButton(props) {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span className="visually-hidden">Show </span>
      <span>all </span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
