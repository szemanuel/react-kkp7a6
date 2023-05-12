import React from 'react';

const Todo = () => {
  return (
    <div className="flex items-center justify-between p-4 border-solid">
      <div className="flex items-center">
        <span className="border-solid border rounded-full p-3 cursor-pointer"> </span>
        <p className="pl-3">
          Todo Item
          </p>
      </div>
    </div>
  );
};

export { Todo };
