import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

// Import login component
import Login from './components/login';
import reducers from './reducers';
import Router from './router';

/**
* This is the App class that initializes a connection between the app and
* firebase along with presenting the pages of the application.
*/
class App extends Component {

  /**
  * When the application begins, this will establish the connection between
  * the application and firebase.
  */
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCFd26P9F9YpIBoptxQ7vGp0hizF_WVpJI',
      authDomain: 'marketplace-7a251.firebaseapp.com',
      databaseURL: 'https://marketplace-7a251.firebaseio.com',
      projectId: 'marketplace-7a251',
      storageBucket: 'marketplace-7a251.appspot.com',
      messagingSenderId: '35201999805'
    };
    firebase.initializeApp(config);

  }
  /**
  * Displays the correct pages in the application depenging on the users
  * login status.
  */
  render() {

    if (!this.props.loggedIn) {
      return (
        <Login />
      );
    }
    return (
      <Router />
    );
  }
}

/**
* Updates the props to let the system know the status of the users login state.
* @param {state} - a general state object
*/
const mapStateToProps = (state) => {
  const { loggedIn } = state;

  return { loggedIn };
};

export default connect(mapStateToProps)(App);
