import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { getEmailInput, getPasswordInput, login } from '../actions';
import { Header, Button, Spinner, Input, Card, CardSection } from './common';


class Login extends Component {
  onEmailChange = text => {
    this.props.getEmailInput(text);
  }

  onPasswordChange = text => {
    this.props.getPasswordInput(text);
  }

  onButtonPress = () => {
    const { email, password } = this.props;

    this.props.login({ email, password });
  }

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <View>
        <Header headerText="Please Log in" />
        <Card>
          <CardSection>
            <Input
              placeholder="email@mail.gvsu.edu or @gvsu.edu"
              label="Email"
              onChange={this.onEmailChange}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              placeholder="Password"
              label="Password"
              onChange={this.onPasswordChange}
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
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.login;

  return { email, password };
};


const LoginConnection = connect(mapStateToProps)(Login);

export default { LoginConnection };
