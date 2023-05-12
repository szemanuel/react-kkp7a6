import React from 'react';
import close from "./close-icon.svg"

const Todo = () => {
  return (
    <div className="flex items-center justify-between p-4 border-solid">
      <div className="flex items-center">
        <span className="border-solid border rounded-full p-3 cursor-pointer"> </span>
        <p className="pl-3">
          Todo Item
          </p>
      </div>
        <img src={close} alt="Close-icon" className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"/>
    </div>
  );
};

export { Todo };
