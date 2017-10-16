import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getEmailInput, getPasswordInput, login } from '../actions';
import { Header, Button, Spinner, Input, Card, CardSection, PageView } from './common';

/**
* The login page of the application along with the logic for handling logins
* using firebase.
*/
class Login extends Component {

  /**
  * Renders the spinning icons when the user attempts to login/register.
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
  * Contains the layout and displays the entire login page.
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
* Updates the properties of the login page which consists of the inputted email
* and password along with loading state and possible errors.
* @param {state} - the state of the login
*/
const mapStateToProps = (state) => {
  const { email, password, error, loading } = state;

  return { email, password, error, loading };
};

/**
*
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
