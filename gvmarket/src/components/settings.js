import React, { Component } from 'react'
import { View, Text } from 'react-native';

import { Header } from './common/header';

class Settings extends Component {
  render() {
    return (
        <View>
          <Header headerText="Settings" />
          <Text>Settings Page</Text>
        </View>
    )
  }
}

export default Settings;
