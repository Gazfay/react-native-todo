import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import TodosWrappContainer from '../containers/TodosWrappContainer';
import AboutComponent from '../components/AboutComponent';

export default AppNavigator = TabNavigator({
  Home: { screen: TodosWrappContainer },
  About: { screen: AboutComponent}
}, {
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: 'white',
    indicatorStyle: {
      backgroundColor: 'white'
    }
  },
});
