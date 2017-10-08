import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button } from 'native-base';
import { Header, PageView } from './common/index';

const styles = {
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // mainBody: {
  //   flex: 1,
  // },
  mainBodyEmptyText: {
    flex: 1,
    alignItems: 'center',
  },
}

class Inbox extends Component {
  render() {
    return (
      <PageView>
        <View style={styles.topBar}>
          <View><Button transparent><Icon name='folder-open' color='#0d67a2' /></Button></View>
          <Header headerText="Inbox" />
          <View><Button transparent><Icon name='notifications' color='#0d67a2' /></Button></View>
        </View>
        <ScrollView>
          <View style={styles.mainBodyEmptyText}>
            <Icon name='textsms' color='#0d67a2' />
            <Text style={styles.inboxEmptyText}>No messages to show.</Text>
            <Text style={styles.inboxEmptyText}>Message a user to change that!</Text>
          </View>
        </ScrollView>
      </PageView>
    );
  }
}

export default Inbox;
