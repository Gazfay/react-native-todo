import React, { Component } from 'react'
import {
  TextInput,
  Button,
  View,
  TouchableHighlight,
  Text
} from 'react-native';
import styles from './styles';

class AddInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      borderBottomColor: '#ccc'
    };

    this.setInputValue = this.setInputValue.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.focusInput = this.focusInput.bind(this);
    this.blurInput = this.blurInput.bind(this);
  }

  setInputValue(text) {
    this.setState({text});
  }

  addTodo() {
    if (this.state.text.trim() !== '') {
      this.props.addTodo(this.state.text);
      this.setState({text: ''});
    }
  }

  focusInput() {
    this.setState({borderBottomColor: '#2196f3'});
  }

  blurInput() {
    this.setState({borderBottomColor: '#ccc'});
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.inputView}>
            <TextInput
              style={{
                color: '#2196f3',
                borderBottomColor: this.state.borderBottomColor,
                borderBottomWidth: 1
              }}
              onChangeText={this.setInputValue}
              value={this.state.text}
              placeholder="Task text"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              onFocus={this.focusInput}
              onBlur={this.blurInput}
            />
          </View>
          <View style={styles.buttonView}>
            <TouchableHighlight 
              style={styles.fullWidthButton} 
              onPress={this.addTodo}
              underlayColor="#b3daf9"
            >
              <Text style={styles.fullWidthButtonText}>ADD</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}

export default AddInputComponent;