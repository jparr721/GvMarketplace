import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Header } from './common/header';

class Browse extends Component {
  render() {
    return (
      <View>
        <Header headerText="Browse" />
        <Text>Browse Content</Text>
      </View>
    )
  }
}

export default Browse;
