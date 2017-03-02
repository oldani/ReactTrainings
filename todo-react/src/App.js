import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo'
import {addTodo, generateId} from './lib/helpers'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id:1, name:"Learn more", isCompleted:true},
        {id:2, name:"Talk a little", isCompleted:false},
        {id:3, name:"Do whatever", isCompleted:false}
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (evt) {
    evt.preventDefault();
    const newId = generateId();
    const newTodo = {id:newId, name:this.state.currentTodo, isCompleted:false}
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updatedTodos,
      currentTodo: ''
    });
  }

  handleInputChange (evt) {
    this.setState({
      currentTodo: evt.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo App</h2>
        </div>
        <div className="todo-app">
          <TodoForm
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            currentTodo={this.state.currentTodo} />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
