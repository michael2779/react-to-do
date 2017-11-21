import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true, toRemove: false },
        { description: 'Throw the dishes away', isCompleted: true, toRemove: false },
        { description: 'Buy new dishes', isCompleted: false, toRemove:false }
      ],
      newTodoDescription: ''
    };
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    console.log(todo);
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

  pleaseDelete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.toRemove = todo.toRemove ? false : true;
    const todo2 = todos.filter(yes_remove => yes_remove.toRemove === false);
    this.setState({ todos: todo2 });
  }

  handleSubmit(e) {
     e.preventDefault();
     if (!this.state.newTodoDescription) {return}
     const newTodo = { description: this.state.newTodoDescription, isCompleted: false, toRemove: false };
     this.setState({ todos: [...this.state.todos, newTodo ], newTodoDescription: ''});
   }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index)} toRemove={ todo.toRemove } pleaseDelete={ () => this.pleaseDelete(index)} />
          )}
        </ul>

        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>


      </div>
    );
  }
}

export default App;
