import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class TodoItem extends React.Component {
  render() {
    const {name,completed, id, removeTodo, toggleTodo, number} = this.props;
    let markthrough = 'none';
    if (completed) markthrough = 'line-through';
    return (
      <View style={itemStyles.containerTask}>
        <Text style={{textDecorationLine: markthrough}}>
            {`${number}) ${name}`}
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
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    
  },
  baseText: {
    fontFamily: 'Cochin',
    color: 'black',
  }
})