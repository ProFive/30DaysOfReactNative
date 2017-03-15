/**
* @Author: Nani
* @Date:   13-Mar-2017
* @Email:  ngvannam5@gmail.com
* @Project: 30DaysOfRectNative
* @Last modified by:   Nani
* @Last modified time: 13-Mar-2017
*/


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! {'\n'} Day1
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}
export default Root;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
