import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class TodoItem extends React.Component {
  render() {
    const {name, id} = this.props
    return (
      <View style={itemStyles.containerTask}>
        <Text style={itemStyles.baseText}>
            {`${id}) ${name}`}
        </Text>
      </View>
    );
  }
}

const itemStyles = StyleSheet.create({
  containerTask: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  baseText: {
    fontFamily: 'Cochin',
    color: 'black'
  }
})