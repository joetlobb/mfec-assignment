import { TOGGLE_STATUS, EDIT_TODO, ADD_TODO, REMOVE_TODO } from './actionTypes'

export const toggleTodo = id => ({
  type: TOGGLE_STATUS,
  id: id
});
export const addTodo = (name, info) => ({
  type: ADD_TODO,
  name: name, 
  info: info
});
export const editTodo = (id, name, info) => ({
  type: EDIT_TODO,
  id: id,
  name: name,
  info: info
});
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id: id
});
