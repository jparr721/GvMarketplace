import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getEmailInput, getPasswordInput, login } from '../actions';
import { Header, Button, Spinner, Input, Card, CardSection, PageView } from './common';


class Login extends Component {
  onEmailChange(text) {
    this.props.getEmailInput(text);
  }

  onPasswordChange(text) {
    this.props.getPasswordInput(text);
  }

  onButtonPress() {
    // const { email, password } = this.props;

    this.props.login(this.props.email, this.props.password);
  }

  renderButton() {
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
      <PageView>
        <Header headerText="Please Log in" />
        <Card>
          <CardSection>
            <Input
              placeholder="email@mail.gvsu.edu"
              label="Email"
              onChange={this.onEmailChange.bind(this)}
              Value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              onChange={this.onPasswordChange.bind(this)}
              Value={this.props.password}
              />
          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.props.error}
         </Text>

         <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </PageView>
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
  const { email, password, error, loading } = state;

  return { email, password, error, loading };
};

export default connect(mapStateToProps)(Login);
