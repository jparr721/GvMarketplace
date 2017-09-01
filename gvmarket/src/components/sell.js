import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Header } from './common/header';

class Sell extends Component {
  render() {
    return (
      <View>
        <Header headerText="Sell" />
        <Text>Sell stuff here</Text>
      </View>
    );
  }
}

export default Sell;
