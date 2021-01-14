import { TOGGLE_STATUS } from "./actionTypes";

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
  logs: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_STATUS:
      const curTodos = [...state.todos];
      curTodos[action.id] = {...state.todos[action.id]};
      curTodos[action.id].isDone = !curTodos[action.id].isDone;
      return {...state, todos: curTodos};
    default: return state;
  };
};

export default reducer;