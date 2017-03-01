import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id:1, name:"Learn more", isCompleted:true},
        {id:2, name:"Talk a little", isCompleted:false},
        {id:3, name:"Do whatever", isCompleted:false}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo App</h2>
        </div>
        <div className="todo-app">
          <input type="text"/>
          <div className="todo-list">
            <ul>
              {this.state.todos.map(todo => (
                <li key={todo.id}>
                  <input type="checkbox" defaultChecked={todo.isCompleted}/>
                  {todo.name}
                </li>
               ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
