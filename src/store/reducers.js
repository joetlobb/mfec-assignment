import { EDIT_TODO, ADD_TODO, TOGGLE_STATUS, REMOVE_TODO, DELETE_LOGS } from "./actionTypes";

const initialState = {
  todos: [
    {
      name: 'Interview with MFEC PCL',
      info: '1/Jan/21 13:01:02',
      isDone: false
    },
    {
      name: 'Interview with SCB PCL',
      info: '2/Jan/21 13:11:22',
      isDone: false
    },
    {
      name: 'Interview with KBANK PCL',
      info: '@ CENTRAL WORLD',
      isDone: true
    },
    {
      name: 'Interview with KRUNGSRI PCL',
      info: '@ Bangkok',
      isDone: false
    },
    {
      name: 'Interview with BBL PCL',
      info: '@ CNX',
      isDone: false
    },
    {
      name: 'Interview with UOB PCL',
      info: 'Update trading account, request for derivative account apart from cash account',
      isDone: true
    },
  ],
  logs: [
    // i should have add the id of todos since the begining, 
    // now i don't have time to restructure it all again
    // hope u don't mind, lol
    {
      name: '+ Interview with MFEC PCL',
      time: '1/1/2021 13:01:02',
      title: 'Created',
    },
    {
      name: '+ Interview with SCB PCL',
      time: '2/1/2021 13:11:22',
      title: 'Created',
    },
    {
      name: '+ Interview with KBANK PCL',
      time: '2/1/2021 13:11:22',
      title: 'Created',
    },
    {
      name: '+ Interview with KRUNGSRI PCL',
      time: '2/1/2021 13:11:22',
      title: 'Created',
    },
    {
      name: '+ Interview with BBL PCL',
      time: '2/1/2021 13:11:22',
      title: 'Created',
    },
    {
      name: '+ Interview with UOB PCL',
      time: '2/1/2021 13:11:22',
      title: 'Created',
    },
  ]
};

const reducer = (state = initialState, action) => {
  let curTodos = [];
  const formatTime = () => {
    const time = new Date();
    const d = time.getDate();
    const M = time.getMonth() + 1;
    const y = time.getFullYear();
    const h = time.getHours();
    const m = time.getMinutes();
    const s = time.getSeconds();
    return `${d}/${M}/${y} ${h}:${m}:${s}`;
  };
  switch (action.type) {
    case TOGGLE_STATUS:
      curTodos = [...state.todos];
      curTodos[action.id] = { ...state.todos[action.id] };
      curTodos[action.id].isDone = !curTodos[action.id].isDone;
      return { ...state, todos: curTodos,
        logs: state.logs.concat({ name: state.todos[action.id].isDone ? 'X '+ action.name : '/ ' + action.name, time: formatTime(), title: state.todos[action.id].isDone ? 'Pending' : 'Completed' }) };
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({ name: action.name, info: action.info }),
        logs: state.logs.concat({ name: '+ ' + action.name, time: formatTime(), title: 'Created' })
      };
    case EDIT_TODO:
      curTodos = [...state.todos];
      curTodos[action.id] = { ...state.todos[action.id], name: action.name, info: action.info };
      let oldName = ' - ' + state.todos[action.id].name;
      if (state.todos[action.id].name === action.name) oldName = ' ++ Info modified';
      return {
        ...state,
        todos: curTodos,
        logs: state.logs.concat({ name: '+ ' + action.name + oldName, time: formatTime(), title: 'Modified' })
      };
    case REMOVE_TODO:
      curTodos = [...state.todos];
      curTodos.splice(action.id, 1);
      return { ...state, todos: curTodos, 
      logs: state.logs.concat({ name: '- ' + action.name, time: formatTime(), title: 'Deleted' }) };
    case DELETE_LOGS:
      return { ...state, logs: []}
    default: return state;
  };
};

export default reducer;