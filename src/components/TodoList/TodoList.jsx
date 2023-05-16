import React from 'react';
import { Todo } from '../Todo/Todo';
import { TodoFilters } from '../TodoFilters/TodoFilters';

const TodoList = ({ todos }) => {
  return (
    <div clasName="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2x1">
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
      <TodoFilters />
    </div>
  );
};

export { TodoList };
