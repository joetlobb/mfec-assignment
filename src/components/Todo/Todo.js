import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import * as classes from '../../styles/iconClassName';



const Todo = (props) => {
  // console.log(props.todos)

    let todos = null;
  if (props.todos.length !== 0) {
    todos = props.todos.map((todo, id) => (
      (
        <div key={todo.name + id}
          className="rounded-lg bg-white border border-gray-300 
          dark:bg-gray-900 dark:border-gray-800 pl-2 pr-3.5">
          <div className="flex flex-row items-center justify-start">
            {todo.isDone ?
              <FontAwesomeIcon icon={faCheck}
                className={classes.isDone} onClick={() => props.toggle(id)} />
              : <FontAwesomeIcon icon={faCheck}
                className={classes.isNotDone} onClick={() => props.toggle(id)} />}
            <div className="flex flex-col">
              <div className="text-md font-medium pt-2 leading-4">
                {todo.name}
              </div>
              <div className="text-xs font-thin text-gray-500 pb-0.5">
                {todo.info}
              </div>
            </div>
          </div>
        </div>
      )
    ))

  };

  return (
    <div className={props.todos ? "grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-4 mx-2 sm:mx-8" : ""}>
      {todos}
    </div>

  );
};

export default Todo;