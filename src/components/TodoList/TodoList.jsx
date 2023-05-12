import React  from 'react';


const TodoList = ({ children }) => {
  return(
    <div clasName="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2x1">
      {children}
      </div>
    )
}

export { TodoList }

