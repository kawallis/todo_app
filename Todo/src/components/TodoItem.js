import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class TodoItem extends React.Component {
  render() {
    const {name,completed, id, removeTodo, toggleTodo} = this.props
    let markthrough;
    if (completed) {
      markthrough = 'line-through';
    }else {
      markthrough = 'none';
    }
    return (
      <View style={itemStyles.containerTask}>
        <Text style={{textDecorationLine: markthrough}}>
            {`${id}) ${name}`}
        </Text>
        <Button
            onPress={(e) => {
              e.preventDefault();
              toggleTodo(id.toString())
            }}
            title="Done"
            color="#841584"
          />
          <Button
            onPress={(e) => {
              e.preventDefault();
              removeTodo(id.toString())
            }}
            title="Delete"
            color="#841584"
          />
      </View>
    );
  }
}

const itemStyles = StyleSheet.create({
  containerTask: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  baseText: {
    fontFamily: 'Cochin',
    color: 'black',
    
  }
})