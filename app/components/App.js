import React, { Component, PropTypes } from 'react'
import {
  View,
  StatusBar
} from 'react-native';
import AppNavigator from '../navigation/mainNavigation';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor="#2196f3"
        />
        <AppNavigator ref={nav => { this.navigator = nav; }} />
      </View>
    )
  }
}
