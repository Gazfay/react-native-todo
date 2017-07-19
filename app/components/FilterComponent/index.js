import React from 'react'
import moment from 'moment';
import classnames from 'classnames';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight ,
  Button
} from 'react-native';

import styles from './styles';


class FilterComponent extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {};
    this.renderActive = this.renderActive.bind(this);
  }

  changeFilter(filter) {
    this.props.setVisibleFilter(filter);
  }

  renderActive(filter, styles) {
    if (this.props.filter == filter) {
      return styles[0];
    } else {
      return styles[1];
    }
  }

  render() {
    return (
      <View style={styles.filterWrapper}>
        <View style={styles.filterButton}>
          <TouchableHighlight 
            style={this.renderActive("SHOW_ALL", [styles.fullWidthButton, styles.inActiveButton])} 
            onPress={this.changeFilter.bind(this, "SHOW_ALL")}
            underlayColor="#b3daf9"
          >
            <Text style={this.renderActive("SHOW_ALL", [styles.fullWidthButtonText, styles.inActiveText])}>ALL</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.filterButton}>
          <TouchableHighlight 
            style={this.renderActive("SHOW_ACTIVE", [styles.fullWidthButton, styles.inActiveButton])} 
            onPress={this.changeFilter.bind(this, "SHOW_ACTIVE")}
            underlayColor="#b3daf9"
          >
            <Text style={this.renderActive("SHOW_ACTIVE", [styles.fullWidthButtonText, styles.inActiveText])}>ACTIVE</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.filterButton}>
          <TouchableHighlight 
            style={this.renderActive("SHOW_COMPLETED", [styles.fullWidthButton, styles.inActiveButton])} 
            onPress={this.changeFilter.bind(this, "SHOW_COMPLETED")}
            underlayColor="#b3daf9"
          >
            <Text style={this.renderActive("SHOW_COMPLETED", [styles.fullWidthButtonText, styles.inActiveText])}>COMPLETED</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default FilterComponent;