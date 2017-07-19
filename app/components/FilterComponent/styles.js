import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  filterWrapper: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10
  },
  filterButton: {
    flex: 1,
    backgroundColor: '#2196f3',
    height: 40
  },
  fullWidthButtonText: {
    fontSize: 12,
    color: 'white'
  },
  fullWidthButton: {
    flex: 1,
    backgroundColor: '#2196f3',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
  },
  inActiveButton: {
    flex: 1,
    height: 40,
    borderWidth: 0.5,
    borderColor: '#999',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inActiveText: {
    fontSize: 12,
    color: '#999'
  }
});