import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Header, PageView, Button } from './common/index';

const styles = {
  btns: {
    marginTop: 10,
  },

  mainBody: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  heading: {
    marginTop: 20
  },
}


class Settings extends Component {
  render() {
    return (
      <PageView>
        <View style={styles.heading}>
          <Header headerText='Settings' />
        </View>
        <View style={styles.mainBody}>

          <View style={styles.btns}>
            <Button>My posts</Button>
          </View>

          <View style={styles.btns}>
            <Button>My watchlist</Button>
          </View>

          <View style={styles.btns}>
            <Button>Refresh my location</Button>
          </View>

          <View style={styles.btns}>
            <Button>Light / Dark mode</Button>
          </View>

          <View style={styles.btns}>
            <Button>Feedback</Button>
          </View>

          <View style={styles.btns}>
            <Button>Logout</Button>
          </View>

          <View style={styles.btns}>
            <Button><Text style={{ color: 'red' }}>Delete account</Text></Button>
          </View>
        </View>
      </PageView>
    );
  }
}

export default Settings;
