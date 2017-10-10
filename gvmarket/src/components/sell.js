import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NewPostDialogue } from './popups/newPostDialogue';
import { Header, PageView } from './common/index';
import { Button } from 'native-base';
import { Icon } from 'react-native-elements';

class Sell extends Component {
  render() {
    return (
      <PageView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
          <View><NewPostDialogue /></View>
          <Header headerText="Make A Post" />
        <View><Button transparent><Icon name='notifications' color='#007aff' /></Button></View>
        </View>
        <View style={{ flex: 1 }}>
          <Text>Sell stuff here</Text>
        </View>
      </PageView>
    );
  }
}

export default Sell;
