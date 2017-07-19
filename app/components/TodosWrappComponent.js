import React, { Component } from 'react';
import TodoListComponent from './TodoListComponent';
import AddInputComponent from './AddInputComponent';
import FilterComponent from './FilterComponent';
import { View, Button } from 'react-native';


class TodosWrappComponent extends Component { 
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <AddInputComponent addTodo={this.props.addTodo} />
        <FilterComponent setVisibleFilter={this.props.setVisibleFilter} filter={this.props.filter} />
        <TodoListComponent 
          getTodos={this.props.getTodos}
          todos={this.props.todos}
          toggleTodo={this.props.toggleTodo}
          deleteTodo={this.props.deleteTodo}
          filter={this.props.filter}
          editTodo={this.props.editTodo}
          loading={this.props.loading}
        />
      </View>
    )
  }

}


export default TodosWrappComponent;