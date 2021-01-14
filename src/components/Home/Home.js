import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../../store/actions';
import Todo from '../Todo/Todo';

const Home = React.memo((props) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    // console.log(props.todosStatus)
  }, [props]);

  const push = () => {
    props.history.push('/history');
    console.log(input)
  }

  const inputHandler = value => {
    console.log(value)
    setInput(value);
  };

  // const todoStatusHandler = () => {
  //   setTodoStatus(!todoStatus);
  // };

  return (
    <React.Fragment>

      <div className="m-4 mb-0 mt-5 sm:m-4 sm:mt-0 pt-0 ">
        <div className="col-start-3 col-span-4 py-4 sm:p-4 text-center font-extrabold tracking-wider text-2xl text-indigo-800"
          onClick={push}>
          TODO LIST
        </div>

      </div>
      <form className="sm:flex mb-2 sm:mb-4">
        <div className="sm:flex-none sm:w-0.5"></div>
        <div className="sm:flex-grow">
          <div className="sm:flex sm:justify-center">
            <input className="block sm:inline-block mx-auto mb-2 
              sm:mr-2 h-8 border-b pl-4 focus:outline-none 
              focus:bg-gray-200 " size="25"
              placeholder="Enter some task..."
              onChange={(e) => inputHandler(e.target.value)}
            ></input>
            <button className="block sm:inline-block mx-auto sm:ml-0 mb-2 px-4 bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-0 py-1 font-semibold">Search</button>
          </div>
        </div>
        <div className="sm:flex-none sm:w-0.5"></div>
      </form>

      {/* todo lists */}

      <Todo todos={props.todosStatus}
      toggle={props.onToggleTodo}
      />

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-4 mx-2 sm:mx-8">
        <div className="rounded-lg bg-white border border-gray-300 
        dark:bg-gray-900 dark:border-gray-800 pl-2 pr-3.5">
          <div className="flex flex-row items-center justify-start">
            {todoStatus ? isDone : isNotDone}
            <div className="flex flex-col">
              <div className="text-md font-medium pt-2 leading-4">
                Interview with Siam Commercial Bank
                    </div>
              <div className="text-xs font-thin text-gray-500 pb-0.5">
                Created 23 December 2020 - 15:00PM
                    </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white border border-gray-300 
        dark:bg-gray-900 dark:border-gray-800 pl-2 pr-3.5">
          <div className="flex flex-row items-center justify-start">
            {isDone}
            <div className="flex flex-col">
              <div className="text-md font-medium pt-2 leading-4">
                Interview with Siam Commercial Bank
                    </div>
              <div className="text-xs font-thin text-gray-500 pb-0.5">
                Created 23 December 2020 - 15:00PM
                    </div>
            </div>
          </div>
        </div>
      </div> */}
    </React.Fragment >
  );
});

const mapStateToProps = state => {
  return {
    todosStatus: state.reducers.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleTodo: id => dispatch(toggleTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);