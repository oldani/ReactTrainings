import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
              <li>
                <input type="checkbox"/>
                Larn more
              </li>
              <li>
                <input type="checkbox"/>
                Talk a little
              </li>
              <li>
                <input type="checkbox"/>
                Do whatever
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
