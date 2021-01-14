import { TOGGLE_STATUS } from './actionTypes'

export const toggleTodo = id => ({
  type: TOGGLE_STATUS,
  id: id
});
