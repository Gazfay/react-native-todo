// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { AppContainer } from 'react-hot-loader'
// import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// import { syncHistoryWithStore} from 'react-router-redux'
// import TodosWrappContainer from './containers/TodosWrappContainer.jsx';
// import AboutComponent from './components/AboutComponent.jsx';
// import App from './components/App.jsx'
// import configureStore from './store/configureStore'
// import routes from './routes/routes';
// import "./styles/styles.css";

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './components/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

export default class reactNative extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <App/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});


// const store = configureStore();
// const history = syncHistoryWithStore(browserHistory, store);

// const renderApp = App => {
//   render(
//     <Provider store={store}>
//       <AppContainer>
//         <Router history={history} routes={routes}></Router>
//       </AppContainer>
//     </Provider>,
//     document.getElementById('root')
//   );
// }

// renderApp(App);

