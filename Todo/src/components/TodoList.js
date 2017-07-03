import React from 'react';
import TodoItem from './TodoItem';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default class TodoList extends React.Component {
  constructor () {
    super();
    this.state = {
      text: 'new task'
    }
  }
  render() {
    const {todos, addTodo, removeTodo, toggleTodo} = this.props
    return (
      <View style={styles.container}>
        {todos.map(task => {
          return (<TodoItem toggleTodo={toggleTodo}
          key={task.id} name={task.name} 
          id={task.id} removeTodo={removeTodo}
          completed={task.completed}
          />)
        })}
        <View style={styles.textInput}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Button
            onPress={(e) => {
              e.preventDefault();
              addTodo(this.state.text)
            }}
            title="Add"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseText: {
    fontFamily: 'Cochin',
    color: 'black'
  },
  textInput: {
    marginTop: 10,
    height: 40, 
    width: 200,
    borderBottomColor: 'gray', 
    borderBottomWidth: 1
  }
})

