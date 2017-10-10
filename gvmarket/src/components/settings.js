import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { PageView, Card, CardSection, Button } from './common';

const styles = {
  btns: {
    marginTop: 50,
  }

}


class Settings extends Component {
  render() {
    return (
      <PageView>
          <View>
          <ScrollView>
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
                <Button>Feedback</Button>
            </View>

            <View style={styles.btns}>
                <Button>Logout</Button>
            </View>

            <View style={styles.btns}>
              <Button>Delete account</Button>
            </View>

            </ScrollView>
          </View>

      </PageView>
    );
  }
}

export default Settings;
