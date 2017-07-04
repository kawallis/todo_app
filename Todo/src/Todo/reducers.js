import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, FILTER } from './constants';

export default function TodoList(state, { type, payload, id}) {
  switch (type) {
  case ADD_TODO:
    return {todos:[...state.todos, { name: payload, completed: false, id}]};
  case REMOVE_TODO:
    return {todos: state.todos.reduce((result, item) => {
      if(item.id.toString() !== payload) {
        result.push(item);
      }
      return result;
    }, [])};
  case TOGGLE_TODO:
    return {todos: state.todos.map(item =>{
      if(item.id.toString() === payload) {
        if(item.completed) {
          item.completed = false;
        }else{
          item.completed = true;
        }
        return item;
      }
      return item;
    })};
  case FILTER:
    return {todos: state.todos, filter: !state.filter};
  case LOGIN: 
    let log = state.slice();
    log.isLoggedIn = payload;
    return log;
  default:
    return state;
  }
}