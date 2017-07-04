import React from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableHighlight } from 'react-native';
import { Link, browserHistory } from 'react-router-native';
import request from 'superagent';
var t = require('tcomb-form-native');

export default class TodoItem extends React.Component {
  constructor () {
    super();
    this.state = {
      username: 'username',
      password: 'password'
    }
  }

  handleSubmit() {
    let value = this.refs.form.getValue()
    if (value.email) {
      this.setState({
        isLoading: true,
      })
      this._authenticate(value)
    }
  }

  _authenticate(value) {
    request
    .post('http://localhost:5000/api/auth/signin')
    .set('Content-Type', 'application/json')
    .send(JSON.stringify(value))
    .then(res => {
      this.props.login(JSON.parse(res.text));
      this.props.history.push('/userlists');
    })
    .catch(error => console.log(error))
    .done()
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    const {todos} = this.props;
    let Form = t.form.Form;
    let signInUser = t.struct({
      email: t.Str,
      password: t.Str,
    });
    let options = {
      auto: 'placeholders',
      fields: {
        password: {
          password: true,
          secureTextEntry: true,
        },
        email: {
          keyboardType: 'email-address',
          autoCorrect: false,
          autoCapitalize: false,
        }
      }
    }
    console.log(this.props);
    return (
      <View style={itemStyles.containerTask}>
        <Text style={itemStyles.baseText}>
        Welcome
        </Text>
        <View style={itemStyles.loginContainer}>
          <Form
            ref="form"
            type={signInUser}
            options={options}
            value={this.state.value}
            onChange={this.onChange.bind(this)}
          />
          <TouchableHighlight
            style={[itemStyles.button, {marginTop: 7}]}
            onPress={this.handleSubmit.bind(this)}
            underlayColor='#E3A90C'>
            <Text style={itemStyles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>
        <View>
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
    width: 300
  },
  title: {
    fontSize: 60,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})