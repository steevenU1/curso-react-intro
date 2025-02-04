import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css';

const defaultTodos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Armar Cajas', completed: true},
  {text: 'Envolver cebolla', completed: false},
  {text: 'Empacar cebolla', completed: false},
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={20}/>
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
      
    </React.Fragment>
  );
}





export default App;
