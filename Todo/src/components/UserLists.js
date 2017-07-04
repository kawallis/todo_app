import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import request from 'superagent';
import api from '../api/api';

export default class UserLists extends React.Component {
  constructor () {
    super();
    this.state = {
      title: 'title',
      listsArr: []
    }
    this.addtolist = this.addtolist.bind(this);
  }

  componentWillMount () {
    api.getLists(this.props.user.id, this.props.token)
    .then(res => this.setState({listsArr: res.lists}))
    .catch(error => console.log(error))
    .done()
  }

  gotoList() {

  }
   
  addtolist(newlist) {
    request
    .post(`http://localhost:5000/api/lists/`)
    .set('Content-Type', 'application/json')
    .set('Authorization', this.props.token)
    .send(JSON.stringify(newlist))
    .then(()=> api.getLists(this.props.user.id, this.props.token))
    .then(res => this.setState({listsArr: res.list}))
    .catch(error => console.log(error))
  }

  render() {
    const {user} = this.props;
    const {listsArr} = this.state;
    let lists;
    console.log(listsArr);
    if(listsArr <= 0){
      lists = null;
    } else {
      lists = listsArr.map(list => {
            return (
              <Button
                onPress={(e) => {
                  e.preventDefault();
                  this.gotoList(this.state)
                }}
                title={list.name}
                color="#841584"
              />
            ); 
          })
    }
    return (
      <View style={itemStyles.containerTask}>
          <Text>Your Lists</Text>
          <View style={itemStyles.textInput}>
            <TextInput
              style={itemStyles.textInput}
              onChangeText={(title) => this.setState({title})}
              value={this.state.name}
            />
          </View>
          <Button 
            onPress={(e) => {
              e.preventDefault();
              this.addtolist({title: this.state.title, user: this.props.user.id})
            }}
            title="Add New List"
            color="#841584"
          />
          {lists}
      </View>
    );
  }
}

const itemStyles = StyleSheet.create({ 
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
  },
  textInput: {
    marginTop: 10,
    marginBottom: 30,
    height: 40, 
    width: 200,
    borderBottomColor: 'gray', 
    borderBottomWidth: 1
  }  
})