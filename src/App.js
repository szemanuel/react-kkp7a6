import React, {useState} from 'react';
import './style.css';
import styles from './tailwind.css';
import 'tailwindcss/tailwind.css';
import { Title } from './components/Title/Title';
import { TodoInput } from './components/TodoInput/Todoinput';
import { TodoList } from './components/TodoList/TodoList';
import { Todo } from './components/Todo/Todo';
import { TodoFilters } from './components/TodoFilters/TodoFilters';

export default function App() {

  const[todos, setTodos] = useState([
{
  id: 1,
  title: "Watch marvel movie",
  completed: false,
},
{
  id: 2,
  title: "Record the next video",
  completed: false,
},
  ])
  return (
    <div>
      <Title />
      <TodoInput />
      <TodoList todos={todos} />
      <Todo />
      <TodoFilters />
    </div>
  );
}
