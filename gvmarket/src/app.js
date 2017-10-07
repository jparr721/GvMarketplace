import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

// Import login component
import Login from './components/login';

import reducers from './reducers';
import Router from './router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB7KmlbJClMGGRlqr95cknDXlrROJOpm7k',
      authDomain: 'market-df395.firebaseapp.com',
      databaseURL: 'https://market-df395.firebaseio.com',
      projectId: 'market-df395',
      storageBucket: 'market-df395.appspot.com',
      messagingSenderId: '924347597165',
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
