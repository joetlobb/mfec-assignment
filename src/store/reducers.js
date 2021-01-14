import { EDIT_TODO, ADD_TODO, TOGGLE_STATUS, REMOVE_TODO } from "./actionTypes";

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
      isDone: true
    },
  ],
  logs: [
    { 
      name: 'Interview with MFEC PCL',
      time: '1/Jan/21 13:01:02',
      title: 'Created',
    },
    {
      name: 'Interview with SCB PCL',
      time: '2/Jan/21 13:11:22',
      title: 'Created',
    },
  ]
};

const reducer = (state = initialState, action) => {
  let curTodos = [];
  switch (action.type) {
    case TOGGLE_STATUS:
      curTodos = [...state.todos];
      curTodos[action.id] = { ...state.todos[action.id] };
      curTodos[action.id].isDone = !curTodos[action.id].isDone;
      return { ...state, todos: curTodos };
    case ADD_TODO:
      return { ...state, todos: state.todos.concat({ name: action.name, info: action.info }) };
    case EDIT_TODO:
      curTodos = [...state.todos];
      curTodos[action.id] = { ...state.todos[action.id], name: action.name, info: action.info };
      return { ...state, todos: curTodos };
    case REMOVE_TODO:
      curTodos = [...state.todos];
      curTodos.splice(action.id, 1);
      return { ...state, todos: curTodos };
    default: return state;
  };
};

export default reducer;