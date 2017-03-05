import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo'
import {addTodo, generateId} from './lib/helpers'

class App extends Component {
  
  state = {
    todos: [
      {id:1, name:"Learn more", isCompleted:true},
      {id:2, name:"Talk a little", isCompleted:false},
      {id:3, name:"Do whatever", isCompleted:false}
    ],
    currentTodo: ''
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const newId = generateId();
    const newTodo = {id:newId, name:this.state.currentTodo, isCompleted:false}
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    });
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      errorMessage: "Please enter a todo name."
    })
  }

  handleInputChange = (evt) => {
    this.setState({
      currentTodo: evt.target.value
    });
  }
  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo App</h2>
        </div>
        <div className="todo-app">
          {this.state.errorMessage && <span className='error'>
            {this.state.errorMessage}</span>}
          <TodoForm
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
            currentTodo={this.state.currentTodo} />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
