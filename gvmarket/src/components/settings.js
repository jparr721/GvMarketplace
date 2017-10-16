import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, PageView, Button } from './common/index';

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
        <ScrollView>

          <View style={styles.emptySpace} />

          <View style={styles.btns}>
            <Button>My posts</Button>
          </View>

          <View style={styles.emptySpace} />

          <View style={styles.btns}>
            <Button>My watchlist</Button>
          </View>

          <View style={styles.emptySpace} />

          <View style={styles.btns}>
            <Button>Refresh my location</Button>
          </View>

          <View style={styles.emptySpace} />

          <View style={styles.btns}>
            <Button>Light / Dark mode</Button>
          </View>

          <View style={styles.emptySpace} />

          <View style={styles.btns}>
            <Button>Feedback</Button>
          </View>

          <View style={styles.emptySpace} />

          <View style={styles.btns}>
            <Button>Logout</Button>
          </View>

          <View style={styles.emptySpace} />

          <View style={styles.btns}>
            <Button>Delete account</Button>
          </View>
        </ScrollView>
      </PageView>
    );
  }
}

const styles = {
  btns: {
    marginTop: 0,
  },
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
