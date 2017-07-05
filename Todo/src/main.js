import React from 'react'
import { Provider } from 'react-redux'
import { Platform } from 'react-native';
import Nav from './Nav'
import {createStore, applyMiddleware, compose} from 'redux';
import devTools from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import reducers from './Todo/reducers';

const store = createStore(reducers, {
  todos: [{name: 'Become a Big Baller', completed: false, id: 1}],
  filter: false,
  isLoggedIn: false,
  token: '',
  user: {},
},
compose(
   applyMiddleware(thunk),
   devTools({
      name: Platform.OS,
      hostname: 'localhost',
      port: 5678
    })
));

const Main = () => (
  <Provider store={store}>
    <Nav />
  </Provider>
)

export default Main