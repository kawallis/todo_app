import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class UserLists extends React.Component {
  render() {
    return (
      <View style={itemStyles.containerTask}>
          <Text>make a list my nigga</Text>
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
})