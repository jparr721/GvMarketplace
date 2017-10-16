import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getEmailInput, getPasswordInput, login } from '../actions';
import { Header, Button, Spinner, Input, Card, CardSection, PageView } from './common';

/**
* The login page of the application. Contains all the code for the user
* interface visuals along with event handlers for user login.
*/
class Login extends Component {

  /**
  * Renders the spinning icon when the user attempts to login / register.
  */
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={() => this.props.onButtonPress(this.props.email, this.props.password)}>
        Login/Register
      </Button>
    );
  }

  /**
  * Presents the layout and displays the entire login page.
  */
  render() {
    return (
      <PageView>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={styles.emptySpace} />
          <Header headerText="GV Market" />
          <Card>
            <CardSection>
              <Input
                placeholder="email@mail.gvsu.edu"
                label="Email"
                onChangeText={(text) => this.props.onEmailChange(text)}
                value={this.props.email}
              />
            </CardSection>

            <CardSection>
              <Input
                secureTextEntry
                placeholder="password"
                label="Password"
                onChangeText={(text) => this.props.onPasswordChange(text)}
                value={this.props.password}
              />
            </CardSection>

            <Text style={styles.errorTextStyle}>
              {this.props.error}
            </Text>

            <CardSection>
              {this.renderButton()}
            </CardSection>
          </Card>
          <View style={styles.emptySpace} />
        </View>
      </PageView>
    );
  }
}

/**
* Updates the following prop values: email, password, error, loading.
* @param {state} - general state object
*/
const mapStateToProps = (state) => {
  const { email, password, error, loading } = state;

  return { email, password, error, loading };
};

/**
* Handles the events when the email / password are updated and when the
* "login / register" button is pressed.
* @param {dispatch} - gender dispatch event
*/
const mapDispatchToProps = (dispatch) => ({
  onButtonPress(email, password) {
    dispatch(login(email, password));
  },
  onEmailChange(text) {
    dispatch(getEmailInput(text));
  },
  onPasswordChange(text) {
    dispatch(getPasswordInput(text));
  }
});

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },

  emptySpace: {
    height: 140,
    backgroundColor: 'white',
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
