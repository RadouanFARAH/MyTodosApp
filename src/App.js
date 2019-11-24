import React from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import uuid from 'uuid';
class App extends React.Component {
  state={
    todos: []
  }
  markComplete = (id) => {
    this.setState({todos : this.state.todos.map( todo => {
      if(todo.id===id) {
        todo.completed=!todo.completed
      }
      return todo;
    })});
  }
 delTodo = (id) => {
   this.setState({todos: [...this.state.todos.filter(todo => todo.id!==id)]});
 }
 addTodo = (title, ) => {
   const newTodo = {
     id: uuid.v4(),
     title,
     completed :false
   }
   this.setState({todos: [...this.state.todos, newTodo]});
 }
  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo  addTodo={this.addTodo}/>
        <Todos delTodo={this.delTodo} todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
