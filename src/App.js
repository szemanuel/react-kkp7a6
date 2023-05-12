import React from 'react';
import './style.css';
import styles from './tailwind.css';
import 'tailwindcss/tailwind.css';
import { Title } from './components/Title/Title';
import { TodoInput } from './components/TodoInput/Todoinput';
import { TodoList } from './components/TodoList/TodoList';
import { Todo } from './components/Todo/Todo';

export default function App() {
  return (
    <div>
      <Title />
      <TodoInput />
      <TodoList>
        <Todo />
      </TodoList>
    </div>
  );
}
