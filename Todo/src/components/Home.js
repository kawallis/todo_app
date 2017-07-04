import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { Link } from 'react-router-native';

export default class TodoItem extends React.Component {
  constructor () {
    super();
    this.state = {
      username: 'username',
      password: 'password'
    }
  }

  render() {
    const {todos} = this.props;
    console.log(todos);
    return (
      <View style={itemStyles.containerTask}>
        <Text style={itemStyles.baseText}>
        Yolo Brolo
        </Text>
        <View style={itemStyles.loginContainer}>
          <View style={itemStyles.textInput}>
            <TextInput
              style={itemStyles.textInput}
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
            />
          </View>
          <View style={itemStyles.textInput}>
            <TextInput
              style={itemStyles.textInput}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
            />
          </View>
        </View>
        <View>
          <Link
            to="/userlists"
            underlayColor='#f0f4f7'
            style={itemStyles.navItem}>
              <Text>Login</Text>
          </Link>
          <Link
            to="/signup"
            underlayColor='#f0f4f7'
            style={itemStyles.navItem}>
              <Text>Sign Up</Text>
          </Link>
        </View>
      </View>
    );
  }
}

const itemStyles = StyleSheet.create({
  containerTask: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseText: {
    fontFamily: 'Cochin',
    color: 'black',
  },
  navItem: {
    padding: 10,
  },
  textInput: {
    marginTop: 10,
    marginBottom: 30,
    height: 40, 
    width: 200,
    borderBottomColor: 'gray', 
    borderBottomWidth: 1
  },
  loginContainer: {
    marginTop: 100,
  }
})