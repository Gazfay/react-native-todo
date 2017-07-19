import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
    marginBottom: 10
  },
  container: {
    flexDirection: 'row',
  },
  buttonView: {
    flex: 1,
    height: 40,
  },
  inputView: {
    flex: 2,
    height: 40,
  },
  fullWidthButtonText: {
    fontSize: 20,
    color: 'white'
  },
  fullWidthButton: {
    flex: 1,
    backgroundColor: '#2196f3',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});