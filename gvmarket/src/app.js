import React, { Component } from 'react';
import firebase from 'firebase';

import { Spinner } from './components/common/index';
import Login from './components/login';
import Router from './router';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyAW6n0hBme_TNtrGfro60lT_kkzdv84HSQ",
      authDomain: "gvmarket-81f22.firebaseapp.com",
      databaseURL: "https://gvmarket-81f22.firebaseio.com",
      projectId: "gvmarket-81f22",
      storageBucket: "gvmarket-81f22.appspot.com",
      messagingSenderId: "293003197586"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
        return <Router />;
      case false:
        return <Login />;
      default:
        return <Spinner size="large" />;

    }
  }

  render() {
    return (
        <Router />
    );
  }
}

export default App;
