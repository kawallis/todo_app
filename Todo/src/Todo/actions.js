import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO, FILTER, LOGIN, LOGOUT} from './constants';
let nextTodoId = 2;
export function addTodo(payload = 'go to laundry mat') {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    payload
  };
}

export function toggleTodo(payload) {
  return {
    type: TOGGLE_TODO,
    payload
  };
}

export function removeTodo(payload) {
  return {
    type: REMOVE_TODO,
    payload
  };
}

export function filterTodo(payload) {
  return {
    type: FILTER,
    payload
  };
}

export function logout(payload) {
  return {
    type: LOGOUT,
    payload
  };
}

export function login(payload) {
  return {
    type: LOGIN,
    payload
  };
}