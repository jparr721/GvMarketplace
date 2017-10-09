import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { PageView, Card, CardSection, Button } from './common';


class Settings extends Component {
  render() {
    return (
      <PageView>
        <CardSection>
          <Button>Logout</Button>
        </CardSection>
      </PageView>
    );
  }
}

export default Settings;
