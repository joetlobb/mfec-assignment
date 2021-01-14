import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { toggleTodo, addTodo } from '../../store/actions';
import Todo from '../Todo/Todo';

const Home = React.memo((props) => {
  const [inputTodo, setInputTodo] = useState({ name: '', info: '' });
  const [enableInfoBtn, setEnableInfoBtn] = useState(false);
  const [addingInfo, setAddingInfo] = useState(false);
  const [matchedSearch, setMatchedSearch] = useState([]);
  const [enableClearBtn, setEnableClearBtn] = useState(false);

  useEffect(() => {
    console.log('HOME RENDERING');
  }, [props]);

  const push = () => {
    console.log(matchedSearch)
  };

  const inputHandler = (input, desc) => {
    if (input !== '' && matchedSearch.length !== 0) { setEnableInfoBtn(false) } else if (input !== '') { setEnableInfoBtn(true) } else {
      setInputTodo({ name: '', info: '' });
      setMatchedSearch([])
      setEnableClearBtn(false)
      setEnableInfoBtn(false);
    };
    if (desc === 'name') { setInputTodo({ ...inputTodo, name: input }) }
    else if (desc === 'info') setInputTodo({ ...inputTodo, info: input });
  };

  const onSubmitHandler = (e, method) => {
    e.preventDefault();
    if (method === 'add' && inputTodo.name !== '') {
      if (inputTodo.info === '') { props.onAddTodo(inputTodo.name, '...') }
      else { props.onAddTodo(inputTodo.name, inputTodo.info) };
      setInputTodo({ name: '', info: '' })
      setEnableInfoBtn(false);
      setAddingInfo(false);
    } else if (method === 'addInfo') {
      setAddingInfo(true);
    } else if (method === 'search' && props.todosStatus && props.todosStatus.length !== 0) {
      const searchList = [];
      props.todosStatus.map((todo) => searchList.push(todo.name));
      let newSearchList = searchList.map(item => item.replace(/\s+/g, ''));
      const searchFor = inputTodo.name;
      const idOfMatched = newSearchList.map((item, id) => {
        item = item.toLowerCase();
        return item.search(searchFor) >= 0 ? id : null
      })
      const newIdOfMatched = idOfMatched.filter(id => id !== null)
      setMatchedSearch(newIdOfMatched);
      setEnableInfoBtn(false);
      if (addingInfo) setAddingInfo(false);
      setEnableClearBtn(true);

    } else if (method === 'clear') {
      setInputTodo({ name: '', info: '' });
      setMatchedSearch([]);
      setEnableClearBtn(false);
    };
  };

  let matchedSearchTodos = [];
  if (matchedSearch && matchedSearch.length !== 0) {
    for (let item of matchedSearch) {
      for (let i in props.todosStatus) {
        console.log(item, i)
        if (item === +i) {
          matchedSearchTodos.push(props.todosStatus[item])
        }
      }
    }
    console.log(matchedSearchTodos)
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
                focus:bg-indigo-700 text-white rounded-lg px-0 py-1 font-semibold"

                  onClick={(e) => onSubmitHandler(e, 'search')}
                >Search</button>
              </div>
              {enableInfoBtn ? <button className="block w-16 sm:inline-block mx-auto mb-2 px-1 bg-red-500 hover:bg-indigo-700 
                focus:bg-indigo-700 text-xs text-white rounded-lg px-0 py-1 font-semibold focus:outline-none "
                onClick={(e) => onSubmitHandler(e, 'addInfo')}>Add info</button>
                : null}
              {enableClearBtn ? <button className="block w-16 sm:inline-block mx-auto mb-2 px-1 bg-red-500 hover:bg-indigo-700 
                focus:bg-indigo-700 text-xs text-white rounded-lg px-0 py-1 font-semibold focus:outline-none "
                onClick={(e) => onSubmitHandler(e, 'clear')}>Clear</button>
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

      <Todo todos={matchedSearch && matchedSearch.length !== 0 ? matchedSearchTodos : props.todosStatus}
        toggle={props.onToggleTodo}
      />
    </React.Fragment >
  );
});

const mapStateToProps = state => {
  return {
    todosStatus: state.reducers.todos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleTodo: (id, name) => dispatch(toggleTodo(id, name)),
    onAddTodo: (name, info) => dispatch(addTodo(name, info))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);