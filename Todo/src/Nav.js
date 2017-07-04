import React from 'react';
import {StyleSheet,Text,View,AppRegistry} from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import TodoContainer from './Todo/TodoContainer';
import HomeContainer from './Todo/HomeContainer';
import SignUpContainer from './Todo/SignUpContainer';
import UserListsContainer from './Todo/UserListsContainer';

const Nav = () => (
  <NativeRouter>
    <View style={styles.container}>
      <Route exact path="/" component={HomeContainer}/>
      <Route exact path="/signup" component={SignUpContainer}/>
      <Route exact path="/userlists" component={UserListsContainer}/>
      <Route path="/todo" component={TodoContainer}/>
    </View>
  </NativeRouter>
)
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },

  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  }
})

export default Nav