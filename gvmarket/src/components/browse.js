import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Header, PageView } from './common/index';

class Browse extends Component {
  render() {
    return (
      <PageView>
        <Header headerText="Browse" />
        <View style={{ flex: 1 }}>
          <Text>Browse Content</Text>
        </View>
      </PageView>
    );
  }
}

export default Browse;
