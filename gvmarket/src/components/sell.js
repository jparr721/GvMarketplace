import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NewPostDialogue } from './popups/newPostDialogue';
import { Header, PageView } from './common/index';

class Sell extends Component {
  render() {
    return (
      <PageView>
        <Header headerText="Make A Post">
          <NewPostDialogue />
        </Header>
        <View style={{ flex: 1 }}>
          <Text>Sell stuff here</Text>
        </View>
      </PageView>
    );
  }
}

export default Sell;
