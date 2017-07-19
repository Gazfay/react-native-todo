/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';
import App from './app/components/App';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';

const store = configureStore();

export default class TodoRN extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <App/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});




AppRegistry.registerComponent('TodoRN', () => TodoRN);
