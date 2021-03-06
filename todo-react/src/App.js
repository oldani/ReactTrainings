import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo'
import {Footer} from './components/Footer'
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo} from './lib/helpers'
import {partial, pipe} from './lib/utils'

class App extends Component {
  
  state = {
    todos: [
      {id:1, name:"Learn more", isComplete:true},
      {id:2, name:"Talk a little", isComplete:false},
      {id:3, name:"Do whatever", isComplete:false}
    ],
    currentTodo: ''
  }

  handleRemove = (id, evt) => {
    evt.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({
      todos: updatedTodos
    });
  }

  handleChange = (id) => {
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos));
    const updatedTodos = getUpdatedTodos(id, this.state.todos);
    this.setState({
      todos: updatedTodos
    });
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
          <TodoList todos={this.state.todos}
            handleChange={this.handleChange}
            handleRemove={this.handleRemove} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
