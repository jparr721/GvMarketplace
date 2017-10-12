import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import { PageView, SearchBar, Card, CardSection, Header } from './common/index';
import { Button } from 'native-base';
import { Icon } from 'react-native-elements'
import { NewPostDialogue } from './popups/newPostDialogue';

const styles = {
  container: {
    paddingTop: 20,
    flex: 1,
  },
};

class Browse extends Component {
  render() {
    return (
      <View syle={styles.container}>
        <Header headerText="Browse">
          <NewPostDialogue />
        </Header>
      </View>
    );
  }
}

export default Browse;
