import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  todoWrapper: {
    flexDirection: 'row'
  },
  todoItem: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center'
  },
  todoText: {
    marginLeft: 5,
    marginRight: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  date: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 5
  },
  deleteButton: {
    marginLeft: 5
  },
  editContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  inputView: {
    flex: 1,
    height: 40,
    position: 'relative'
  },
});