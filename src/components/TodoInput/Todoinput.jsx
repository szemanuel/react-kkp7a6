import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  //Hacemos que se capture el evento cuando apriete enter y lo llamamos cuando hacemos onKeyDown
  const handleTodo = (e) => {
    if (e.key.toLowerCase() === 'enter') {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <div className="mt-6 relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="border border-gray-500 border-solid p-3 rounded-full">
          {' '}
        </span>
      </div>
      <input
        type="text"
        placeholder="What next..."
        className="focus:shadow-lg font-inter focus:shadow-blue-800 pl-12 w-full py-4 rounded-x1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        //Con la siguiente función vemos que finalmente agrega al listado lo que ponemos en el input
        onKeyDown={(e) => handleTodo(e) }
        
      />
    </div>
  );
};

export { TodoInput };
