import { TOGGLE_STATUS, EDIT_TODO, ADD_TODO, REMOVE_TODO, DELETE_LOGS } from './actionTypes'

export const toggleTodo = (id, name) => ({
  type: TOGGLE_STATUS,
  id: id,
  name: name
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
export const removeTodo = (id, name) => ({
  type: REMOVE_TODO,
  id: id,
  name: name
});
export const deleteLogs = () => ({
  type: DELETE_LOGS
});