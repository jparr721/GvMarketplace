import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { Spinner } from './components/common/index';

import reducers from './reducers';
import Login from './components/login';
import Router from './router';

class App extends Component {
  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider; store={store}>
          <Router />
      </Provider>;
  )
  }
}

export default App;
