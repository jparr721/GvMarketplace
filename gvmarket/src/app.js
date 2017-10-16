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
      apiKey: 'AIzaSyB7KmlbJClMGGRlqr95cknDXlrROJOpm7k',
      authDomain: 'market-df395.firebaseapp.com',
      databaseURL: 'https://market-df395.firebaseio.com',
      projectId: 'market-df395',
      storageBucket: 'market-df395.appspot.com',
      messagingSenderId: '924347597165',
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
