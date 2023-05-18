import React, { useState } from 'react';
import './style.css';
import styles from './tailwind.css';
import 'tailwindcss/tailwind.css';
import { Title } from './components/Title/Title';
import { TodoInput } from './components/TodoInput/Todoinput';
import { TodoList } from './components/TodoList/TodoList';
import { Todo } from './components/Todo/Todo';
import { TodoFilters } from './components/TodoFilters/TodoFilters';

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Watch marvel movie',
      completed: false,
    },
    {
      id: 2,
      title: 'Record the next video',
      completed: false,
    },
  ]);

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false,
    };

    const todoList = [...todos];
    todoList.push(newTodo);
    setTodos(todoList);
  };

  //Ahora dentro del App.js para que lo muestre como completada. Para eso vamos a crear una función que se llame handleSetComplet que va a recibir un id , le vamos a decir que la lista actualizada va a hacer un todos.map y si el todo.id es igual al id que estamos recibiendo , vamos a retornar todos nuestros todo y el completed va a ser lo inverso a lo completado. Agregamos un return del todo para que devuelva el componente y al final un setTodo(updatedList).En resumen, va a recorrer la lista, si coincide el valor del completado va a ser lo contrario al que tiene ahora mismo. Esto lo hace cada vez que haces click.

  const handleSetComplete = (id) => {
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedList);
  };

  return (
    <div>
      <Title />
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} handleSetComplete={handleSetComplete} />
      <TodoFilters />
    </div>
  );
}
