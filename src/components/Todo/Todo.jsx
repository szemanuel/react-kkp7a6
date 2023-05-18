import React from 'react';
import close from './close-icon.svg';
import check from './check-icon.svg';

const Todo = ({ todo, handleSetComplete }) => {
  const { title, completed, id } = todo;

  return (
    <div className="flex items-center justify-between p-4 border-solid">
      <div className="flex items-center">
        {completed ? (
          <div
            onClick={() => handleSetComplete(id)}
            className="bg-green-700 p-1 rounded-full cursor-pointer"
          >
            <img className="h4 w-4" src={check} alt="check icon" />
          </div>
        ) : (
          <div>
            {' '}
            <span
              onClick={() => handleSetComplete(id)}
              className="border-solid border border-grey-500 rounded-full p-3 cursor-pointer"
            >
              {' '}
            </span>
          </div>
        )}

        <p className={'pl-3' + (completed && 'line-througt')}>{title}</p>
      </div>
      <img
        src={close}
        alt="Close-icon"
        className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"
      />
    </div>
  );
};

export { Todo };
