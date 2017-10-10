import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import { PageView, Button, SearchBar, Card, CardSection } from './common/index';
import { NewPostDialogue } from './popups/newPostDialogue';

const styles = {
  buttonText: {
    fontSize: 24,
    color: '#0d67a2',
    fontWeight: '700',
  },
  listText: {
    fontSize: 17,
  },
  categories: {
    paddingBottom: 1,
  },
  images: {
    flex: 1,
    height: 100,
    width: null,
  },
  categoryContainers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryTitles: {
    justifyContent: 'flex-start',
  },
  seeAllText: {
    color: '#0d67a2',
  },
};

class Browse extends Component {
  render() {
    return (
      <PageView>
        <SearchBar
          placeholder="Search...">
          <NewPostDialogue />
        </SearchBar>
      </PageView>
    );
  }
}

export default Browse;
