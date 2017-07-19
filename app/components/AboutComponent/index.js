import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './styles';


class AboutComponent extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}

	render() {
		console.log(this.props.navigation);
		return (
	    <View style={styles.container}>
	      <Text>About author page.</Text>
	    </View>
	  )
	}
}



export default AboutComponent;