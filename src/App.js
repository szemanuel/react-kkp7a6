import React from 'react';
import './style.css';
import styles from './tailwind.css';
import 'tailwindcss/tailwind.css';
import { Title } from './components/Title/Title';
import { TodoInput } from './components/TodoInput/Todoinput';
import { TodoList } from './components/TodoList/TodoList';


export default function App() {

  return (
    <div>
      <Title />
      <TodoInput />
      <TodoList>
        <h2>Hola</h2>
      </TodoList>
    </div>
  );
}
