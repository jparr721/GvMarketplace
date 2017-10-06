import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Header, Button, Spinner, Input, Card, CardSection } from './common';


class Login extends Component {
  render() {
    return (
      <View>
        <Header headerText="Please Log in" />
        <Card>
          <CardSection>
            <Input
              placeholder="GVSU Email"
              label="Email"
              value={this.props.email}
              onChange={value => this.props.getEmailInput({ prop: 'email', value })}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              placeholder="Password"
              label="Password"
              value={this.props.password}
              onChange={value => this.props.getPasswordInput({ prop: 'password', value })}
              />
          </CardSection>
          <Text style={styles.errorTextStyle}>
           {this.state.error}
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
  const { email, password } = state.login;

  return { email, password };
};


const LoginConnection = connect(mapStateToProps)(Login);

export default { LoginConnection };
