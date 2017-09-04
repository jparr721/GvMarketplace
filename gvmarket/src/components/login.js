import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import { Header } from './common/header';

class Login extends Component {
  render() {
    return (
      <Container style={styles.containerStyle}>
        <Header headerText="Please Log In" />
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              secureTextEntry={false}
              />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              />
          </Item>
        </Form>
      </Container>
    );
  }
}

const styles = {
}

export default Login;
