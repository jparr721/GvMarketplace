import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button } from 'native-base';
import { Header, PageView } from './common/index';


/**
* The inbox page of the application
*/
class Inbox extends Component {

  /**
  * Contains the layout and displays the entire inbox page.
  */
  render() {
    return (
      <PageView>
        <View style={styles.topBar}>
          <View style={styles.topLeftIcon}><Button transparent><Icon name='folder-open' color='#007aff' /></Button></View>
          <Header headerText="Inbox" />
          <View style={styles.topRightIcon}><Button transparent><Icon name='notifications' color='#007aff' /></Button></View>
        </View>
        <View />
        <ScrollView>
          <View style={styles.inboxEmptyText}>
            <Icon name='textsms' color='#007aff' />
            <Text>No messages to show.</Text>
            <Text>Message a user to change that!</Text>
          </View>
        </ScrollView>
      </PageView>
    );
  }
}

const styles = {
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  topLeftIcon: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  topRightIcon: {
    paddingRight: 20,
    paddingTop: 20,
  },
  inboxEmptyText: {
    paddingTop: Dimensions.get('window').height / 2.85,
    flex: 1,
    alignItems: 'center',
  },
}

export default Inbox;
