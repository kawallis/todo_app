import React from 'react';
import TodoItem from './TodoItem';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default class TodoList extends React.Component {
  constructor () {
    super();
    this.state = {
      text: 'add a task'
    }
  }
  render() {
    const {todos, addTodo, removeTodo, toggleTodo} = this.props;
    console.log(todos);
    return (
      <View style={styles.container}>
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
          {todos.map((task, i) => {
          return (<TodoItem toggleTodo={toggleTodo}
          key={i} name={task.name} number={i + 1}
          id={task.id} removeTodo={removeTodo}
          completed={task.completed}
          />)
        })}
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
    marginTop: 100,
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

