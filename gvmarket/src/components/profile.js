import React, { Component } from 'react'
import { View, Text } from 'react-native';

import { Header, PageView } from './common/index';

class Profile extends Component {
  render() {
    return (
      <PageView>
        <Header headerText="Profile" />
        <View style={{ flex: 1 }}>
          <Text>Profile Page</Text>
        </View>
      </PageView>
    )
  }
}

export default Profile;
