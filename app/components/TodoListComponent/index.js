import React, { Component } from 'react'
import Todo from './../TodoComponent'
import {
  ScrollView,
  ListView,
  FlatList,
  View,
  Text
} from 'react-native';
import styles from './styles';

class TodoListComponent extends Component {
  constructor(props) {
    super(props);
    this.renderTodos = this.renderTodos.bind(this);
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
  }

  componentDidMount() {
    this.props.getTodos();
  }

  renderTodos(todos) {
    if (this.props.loading === true) {
      return (<Text style={styles.loadingText}>Loading...</Text>)
    } else if (!!todos.length) {
      todos.filter((todo) => {
        if (this.props.filter == 'SHOW_ALL'){
          return todo;
        } else if (this.props.filter == 'SHOW_ACTIVE') {
          return todo.completed == false;
        } else if (this.props.filter == 'SHOW_COMPLETED') {
          return todo.completed == true;
        }
      });

        return <FlatList
          data={todos}
          keyExtractor={(item, index) => item.id}
          renderItem={({item}) => 
            <Todo
              {...item}
              toggleTodo={this.props.toggleTodo}
              deleteTodo={this.props.deleteTodo}
              editTodo={this.props.editTodo}
            />
          }
        />

    } else {
      return (
        <View style={styles.noTasks}>
          <Text>No tasks</Text>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.todoList}>
        {this.renderTodos(this.props.todos)}
      </View>
    )
  }

}

export default TodoListComponent;