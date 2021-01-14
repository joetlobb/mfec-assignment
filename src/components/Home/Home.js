import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { toggleTodo, addTodo } from '../../store/actions';
import Todo from '../Todo/Todo';

const Home = React.memo((props) => {
  const [inputTodo, setInputTodo] = useState({name: '', info: ''});
  const [enableInfoBtn, setEnableInfoBtn] = useState(false);
  const [addingInfo, setAddingInfo] = useState(false);

  useEffect(() => {
    console.log('HOME RENDERING');
  }, [props]);

  const push = () => {
    // props.history.push('/history');
    console.log(inputTodo)
    console.log(props.todosStatus)
  }

  const inputHandler = (input, desc) => {
    if (input !== '') { setEnableInfoBtn(true) } else { setEnableInfoBtn(false) };
    if (desc === 'name') {setInputTodo({ ...inputTodo, name: input })} 
    else if (desc === 'info') setInputTodo({ ...inputTodo, info: input });
  };

  const onSubmitHandler = (e, method) => {
    e.preventDefault();
    if (method === 'add' && inputTodo.name !== '') {
      if (inputTodo.info === '') {props.onAddTodo(inputTodo.name, '...')}
      else {props.onAddTodo(inputTodo.name, inputTodo.info)};
      setInputTodo({name: '', info: ''})
      setEnableInfoBtn(false);
      setAddingInfo(false);
    } else if (method === 'addInfo') {
      setAddingInfo(true);
    };
  };

  return (
    <React.Fragment>

      <div className="m-4 mb-0 mt-5 sm:m-4 sm:mt-0 pt-0 ">
        <div className="col-start-3 col-span-4 py-4 sm:p-4 text-center font-extrabold tracking-wider text-2xl text-indigo-800"
          onClick={push}>
          TODO LIST
        </div>

      </div>
      <form className="sm:flex mb-2 sm:mb-4" onSubmit={(e) => onSubmitHandler(e, 'add')}>
        <div className="sm:flex-none sm:w-0.5"></div>
        <div className="sm:flex-grow">
          <div className="sm:flex sm:justify-center">
            <div className="sm:flex sm:flex-col">
              <div className="sm:flex sm:flex-row">
                <input className="block sm:inline-block mx-auto mb-2 
                sm:mr-2 h-8 border-b pl-4 focus:outline-none 
                focus:bg-gray-200 " size="25"
                  placeholder="Enter some task..." value={inputTodo.name}
                  onChange={(e) => inputHandler(e.target.value, 'name')}></input>
                <button className="block sm:inline-block mx-2 sm:ml-0 mb-2 px-4 bg-red-500 hover:bg-indigo-700 
                focus:bg-indigo-700 text-white rounded-lg px-0 py-1 font-semibold">New</button>
                <button className="block sm:inline-block mx-auto sm:ml-0 mb-2 px-4 bg-indigo-500 hover:bg-indigo-700 
                focus:bg-indigo-700 text-white rounded-lg px-0 py-1 font-semibold">Search</button>
              </div>
              {enableInfoBtn ? <button className="block w-16 sm:inline-block mx-auto mb-2 px-1 bg-red-500 hover:bg-indigo-700 
                focus:bg-indigo-700 text-xs text-white rounded-lg px-0 py-1 font-semibold focus:outline-none "
                onClick={(e) => onSubmitHandler(e, 'addInfo')}>Add info</button> 
                : null}
              {addingInfo ? <input className="block sm:inline-block ml-0 mb-2 
                sm:mr-2 h-8 border-b pl-4 text-xs focus:outline-none 
                focus:bg-gray-200 " size="25"
                placeholder="Enter some info..." value={inputTodo.info}
                onChange={(e) => inputHandler(e.target.value, 'info')}
              ></input> : null}
            </div>
          </div>
        </div>
        <div className="sm:flex-none sm:w-0.5"></div>
      </form>

      {/* todo lists */}

      <Todo todos={props.todosStatus}
        toggle={props.onToggleTodo}
      />
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
    onToggleTodo: (id) => dispatch(toggleTodo(id)),
    onAddTodo: (name, info) => dispatch(addTodo(name, info))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);