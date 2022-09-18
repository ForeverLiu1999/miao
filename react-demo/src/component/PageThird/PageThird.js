import React from 'react';
import './PageThird.css';

// function PageThird() {
//   return (
//     <div className="PageThird">
//         <p>
//          PageThird
//         </p>
//     </div>
//   );
// }

class todoList extends React.Component {
  constructor (){
    super()

    this.state = {
      visible: 'all',
      editingIdx: -1,
      todos: [{
        text: 'eat',
        done: true,
      }, {
        text: 'drink',
        done: false,
      }, {
        text: 'sleep',
        done: true,
      }]
    }
  }

  render () {
    return (
    <div>
      <h1>todos</h1>
      <div>
        <input type="checkbox" />
        <input type="text" />
      </div>
      <ul>
        {
          [
            <li>a</li>,
            <li>a</li>,
            <li>a</li>,
            <li>a</li>,
          ]
        }
      </ul>
      <div>
        <span>xxx item(s) left</span>
        <div>
          <label><input type="radio" name="visible" value="all"/>All</label>
          <label><input type="radio" name="visible" value="active"/>Active</label>
          <label><input type="radio" name="visible" value="completed"/>Completed</label>
        </div>
      </div>
    </div>)
  }
}

export default todoList;