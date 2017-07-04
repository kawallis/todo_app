import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { Link } from 'react-router-native';
import superagent from 'superagent';

export default class SignUp extends React.Component {
  constructor () {
    super();
    this.state = {
      name: 'name',
      email: 'email',
      password: 'password'
    }
    this.signup = this.signup.bind(this);
  }

  signup(creds) {
    creds.email = creds.email.toLowerCase();
    fetch('http://localhost:5000/api/auth/signup',{
        method: 'POST',
        body: JSON.stringify(creds),
        headers: new Headers({'Content-Type': 'application/json'})
    }) 
    .then(res => {
        alert('Awesome Signup Now');
        this.setState({
          name: 'name',
          email: 'email',
          password: 'password'
        })
    })
    .catch(err => {
      console.log('There has been a problem: ' + err.message);
      throw err;
    });
  }

  render() {
    const {todos} = this.props;
    return (
      <View style={itemStyles.containerTask}>
        <Text style={itemStyles.baseText}>
        Sign Up Now Brolo Monolo
        </Text>
        <View style={itemStyles.loginContainer}>
          <View style={itemStyles.textInput}>
            <TextInput
              style={itemStyles.textInput}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
            />
          </View>
          <View style={itemStyles.textInput}>
            <TextInput
              style={itemStyles.textInput}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
            />
          </View>
          <View style={itemStyles.textInput}>
            <TextInput
              style={itemStyles.textInput}
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
            />
          </View>
        </View>
        <View>
          <Link
            to="/"
            underlayColor='#f0f4f7'
            style={itemStyles.navItem}>
              <Text>Back to Login</Text>
          </Link>
          <Button 
            onPress={(e) => {
              e.preventDefault();
              this.signup(this.state)
            }}
            title="Sign Up Now"
            color="#841584"
          />
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