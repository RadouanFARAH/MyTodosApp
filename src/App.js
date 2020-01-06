import React from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import Axios from 'axios'


class App extends React.Component {
  state={
    todos: []
  }
  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res=>this.setState({todos:res.data}))
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
   Axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res=>{
     this.setState({todos: [...this.state.todos.filter(todo => todo.id!==id)]});
   })
   
 }
 addTodo = (title) => {
  Axios.post('https://jsonplaceholder.typicode.com/todos',{
    title,
    completed:false
  }).then(res => this.setState({todos: [...this.state.todos, res.data]}))

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
