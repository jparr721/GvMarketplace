import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button } from 'native-base';
import { Header, PageView } from './common/index';

const styles = {
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  mainBody: {
    flex: 1,
  },
  inboxTitleText: {
    color: '#0d67a2',
    fontWeight: '700',
    fontSize: 26,
    marginTop: 15,
  },
  inboxEmptyText: {
    color: '#0d67a2',
  },
  mainBodyEmptyText: {
    flex: 1,
    alignItems: 'center',
    marginTop: 210,
  },
}

class Inbox extends Component {
  render() {
    return (
      <PageView>
        <View style={styles.topBar}>
          <View><Button transparent><Icon name='folder-open' color='#0d67a2' /></Button></View>
          <View><Button transparent><Icon name='notifications' color='#0d67a2' /></Button></View>
        </View>
        <ScrollView>
          <View style={styles.mainBody}>
            <Text style={styles.inboxTitleText}>Inbox</Text>
            <Text style={styles.inboxEmptyText}>You have no unread messages</Text>
          </View>
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
