import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Header, PageView } from './common/index';

class Inbox extends Component {
  render() {
    return (
      <PageView>
        <Header headerText="Inbox" />
        <View style={{ flex: 1 }}>
          <Text>Inbox Content</Text>
        </View>
      </PageView>
    );
  }
}

export default Inbox;
