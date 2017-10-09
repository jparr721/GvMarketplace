import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/app';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

const gvMarket = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('gvmarket', () => gvMarket);
