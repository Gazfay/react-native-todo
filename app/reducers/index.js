import {combineReducers} from 'redux';
import filter from './filterReducer';
import todos from './todosReducer';

const rootReducer = combineReducers({
  filter,
  todos
});

export default rootReducer;