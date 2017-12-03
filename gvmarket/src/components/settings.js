import React, { Component } from 'react';
import { View, ScrollView, FlatList, Text } from 'react-native';
import firebase from 'firebase';

// Common
import { Header, PageView, Button, ButtonCard } from './common/index';

/**
* The settings page of the application. No functionality implemented for this
* page yet.
*/
class Settings extends Component {
  /**
  * Contains the layout and displays the entire settings page when called.
  */
  render() {
    return (
      <PageView>

        <View style={styles.heading}>
          <Header headerText="Settings" />
        </View>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
          <ButtonCard>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </ButtonCard>
        </View>
      </PageView>
    );
  }
}


const styles = {
  mainBody: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
  },
  heading: {
    marginTop: 20
  },
  emptySpace: {
    height: 33,
  }
}

export default Settings;
