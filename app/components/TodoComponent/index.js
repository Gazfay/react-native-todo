import React, {Component} from 'react'
import moment from 'moment';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import CheckBox from 'react-native-checkbox-heaven';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


class TodoComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      text: props.text
    }

    this.clickDelete =  this.clickDelete.bind(this);
    this.changeToggle = this.changeToggle.bind(this);
    this.changeTextTodo = this.changeTextTodo.bind(this);
    this.saveEditingText = this.saveEditingText.bind(this);
    this.renderTextFiled = this.renderTextFiled.bind(this);
    this.editText = this.editText.bind(this);
  }

  changeToggle(id) {
    this.props.toggleTodo(id, !this.props.completed);
  }

  clickDelete(id) {
    this.props.deleteTodo(id);
  }

  editText(status) {
    this.setState({
      editing: true,
      text: this.props.text
    });
  }

  changeTextTodo(text) {
    this.setState({text});
  }

  saveEditingText() {
    if (this.state.text.trim() !== '') {
      this.props.editTodo(this.props.id, this.state.text);
      this.setState({editing: false});
    }
  }

  renderTextFiled() {
    if (this.state.editing) {
      return (
        <View style={styles.editContainer}>
          <View style={styles.inputView}>
            <TextInput
              style={{
                color: '#2196f3',
              }}
              onChangeText={this.changeTextTodo}
              onSubmitEditing={this.saveEditingText}
              onEndEditing={()=> {this.setState({editing: false})}}
              onBlur={()=> {this.setState({editing: false})}}
              value={this.state.text}
              placeholder="Edit task"
              autoCorrect={false}
              autoFocus={true}
              underlineColorAndroid="#b3daf9"
            />
          </View>
        </View>
      );
    } else if (!this.state.editing) {
      return (
        <TouchableOpacity onPress={this.editText}>
          <Text>{this.state.text}</Text>
        </TouchableOpacity>
      );
    }
  }

  render() {
    console.log(this.props, 'Props todo');
    console.log(this.state.editing, this.state, 'Reload state todo');
    return (
      <View style={styles.todoWrapper}>
        <View style={styles.todoItem}>
          <View style={styles.checkbox}>
            <CheckBox
              onChange={()=> {this.changeToggle(this.props.id)}}
              checked={this.props.completed}
              iconSize={28}
              iconName='matMix'
              checkedColor='#2196f3'
              uncheckedColor='#666666'
            />
          </View>
          <View style={styles.todoText}>
            {this.renderTextFiled()}
          </View>
        </View>
        <View style={styles.date}>
          <Text>{moment(this.props.createdAt).format('MM.DD HH:mm')}</Text>
          <View style={styles.deleteButton}>
            <TouchableOpacity onPress={()=> {this.clickDelete(this.props.id)}}>
              <Icon name="close-box" size={30} color="#2196f3" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default TodoComponent;