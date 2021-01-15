import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import * as classes from '../../../styles/iconClassName';
import { connect } from 'react-redux';
import { editTodo, removeTodo, toggleTodo } from '../../../store/actions';

const Todo = (props) => {
  const [inputEditing, setInputEditing] = useState({ editing: false, id: null });
  const [inputTodo, setInputTodo] = useState({ name: null, info: null });
  const inputRef = useRef();

  useEffect(() => {
    console.log('TODO RENDERING');
  }, []);

  useEffect(() => {
    if (inputEditing.editing) inputRef.current.focus();
  }, [inputEditing.editing, inputRef]);

  const editingHandler = (id) => {
    switch (inputEditing.editing) {
      case true:
        if (inputEditing.id !== id) {
          setInputEditing({ ...inputEditing, id: id })
          setInputTodo({ name: props.todos[id].name, info: props.todos[id].info });
        } else if (inputEditing.id === id) {
          setInputEditing({ ...inputEditing, editing: false })
          setInputTodo({ name: null, info: null });
        };
        return
      case false:
        if (inputEditing.id !== id) {
          setInputEditing({ editing: true, id: id })
          setInputTodo({ name: props.todos[id].name, info: props.todos[id].info });
        } else if (inputEditing.id === id) {
          setInputEditing({ ...inputEditing, editing: true })
          setInputTodo({ name: props.todos[id].name, info: props.todos[id].info });
        };
        return
      default: return;
    }
  }

  const inputEditFieldHandler = (input, desc) => {
    if (desc === 'name') setInputTodo({ ...inputTodo, name: input });
    if (desc === 'info') setInputTodo({ ...inputTodo, info: input });
  };

  const onSubmitHandler = (e, id, method) => {
    e.preventDefault();
    if (method === 'edit') {
      // todo... fix when input empty input
      // todo... fix when submit without any changes in todo name and info
      props.onEditTodo(id, inputTodo.name, inputTodo.info);
    } else if (method === 'del') {
      props.onRemoveTodo(id, inputTodo.name);
    };
    setInputEditing({ editing: false, id: null });
    setInputTodo({ name: null, info: null });
  };

  const toggleTodoHandler = (id, name) => {
    props.onToggleTodo(id, name);
  }

  let todos = null;

  if (props.todos.length !== 0) {
    todos = props.todos.map((todo, id) => {

      // in editing mode

      if (inputEditing.editing && inputEditing.id === id) {
        return (
          <React.Fragment key={todo.name + id}>
            <div
              className="rounded-lg bg-white border border-gray-300 dark:bg-gray-900 dark:border-gray-800 px-0 sm:pl-3.5 sm:pr-3.5">
              <div className="flex justify-center pt-2 text-xs">Editing...</div>
              <div className="flex flex-row items-center justify-center">
                <div className="flex flex-col">
                  <form className="flex flex-row justify-center" onSubmit={(e) => onSubmitHandler(e, id, 'edit')} >
                    <div className="flex flex-col">
                      <input className="text-md font-medium p-2 pb-0.5 sm:px-0 md:px-2 leading-4 border-b border-gray-300 hover:border-indigo-500 focus:outline-none focus:border-red-800"
                        placeholder={todo.name} onChange={(e) => inputEditFieldHandler(e.target.value, 'name')}
                        ref={inputRef}>
                      </input>
                      <input className="text-xs font-thin text-gray-500 mb-2 p-1 pl-2 pb-0.5 border-b border-gray-300 hover:border-indigo-500 focus:outline-none focus:border-red-800"
                        placeholder={todo.info} onChange={(e) => inputEditFieldHandler(e.target.value, 'info')}>
                      </input>
                    </div>
                    <button >
                      <FontAwesomeIcon icon={faCheck}
                        className="ml-2 mr-0 md:mx-2 my-auto px-1 text-2xl rounded-full border border-gray-300 text-gray-300 hover:border-indigo-700 
                    hover:bg-indigo-700 hover:text-white h-12 hover:bg-indigo-600"
                        onClick={(e) => onSubmitHandler(e, id, 'edit')}
                      />
                    </button>
                  </form>
                  <div className="flex justify-center">

                    <button className=" mx-auto mb-1 sm:mr-2.5 px-1 h-6 w-20 text-xs  rounded-full border border-gray-300 text-gray-300
                    hover:bg-red-400   hover:text-white hover:border-red-500 ml-2 mr-0 sm:mx-2"
                      onClick={(e) => onSubmitHandler(e, id, 'del')}>
                      Delete
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      } else {

        // in default mode (not editing)

        return (
          <React.Fragment key={todo.name + id}>
            <div
              className="rounded-lg bg-white border border-gray-300 dark:bg-gray-900 dark:border-gray-800 pl-2 pr-3.5">
              <div className="flex flex-row items-center justify-start">
                {todo.isDone ? <FontAwesomeIcon icon={faCheck}
                  className={classes.isDone} onClick={() => toggleTodoHandler(id, todo.name)} />
                  : <div className="flex mr-2.5 min-w-6 h-6 rounded-full border border-gray-300 text-gray-300 
                  " onClick={() => toggleTodoHandler(id, todo.name)}>
                    <div className="m-auto w-4 h-4  rounded-lg hover:border-indigo-700 hover:bg-indigo-700"></div>
                    </div>}
                <div className="flex flex-col">
                      <div className="text-md font-medium pt-2 leading-4 break-words"
                        onClick={() => editingHandler(id)}>
                        {todo.name}
                      </div>
                      <div className="text-xs font-thin text-gray-500 pb-0.5 break-words"
                        onClick={() => editingHandler(id)}>
                        {todo.info}
                      </div>
                    </div>
                  </div>
            </div>
          </React.Fragment>
        )
      }
    })
  };

  return (
            <React.Fragment>
              <div className={props.todos ? "grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-4 mx-2 sm:mx-8" : ""}>
                {todos}
              </div>
            </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
              todos: state.reducers.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
              onToggleTodo: (id, name) => dispatch(toggleTodo(id, name)),
    onEditTodo: (id, name, info) => dispatch(editTodo(id, name, info)),
    onRemoveTodo: (id, name) => dispatch(removeTodo(id, name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);