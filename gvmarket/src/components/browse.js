import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, ListView, Alert } from 'react-native';
import firebase from 'react-native-firebase';
import { Button } from 'native-base';
import { Icon } from 'react-native-elements';
import axios from 'axios';

import { PageView, SearchBar, Card, CardSection, Header, Spinner, Post } from './common/index';
import { NewPostDialogue } from './popups/newPostDialogue';
import { DeletePostDialogue } from './popups/deletePostDialogue';


/**
* The browse page of the application.
*/
class Browse extends Component {

  /*
  * Constructor to initialize state objects
  */
  constructor() {
    super();
    
    this.unsubscribe = null;

    this.state = {
      load: true,
    };
  }

  /**
  * When the application officially launches, this will create a list
  * of postings that will appear on the browse page.
  */
  componentDidMount() {
    // this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    this.loadPosts();
  }

  /**
  *  Updates the postings that are on the browse page by pushing them
  * into the postings array.
  * @param {snapshot} querySnapshot - document snapshot of current contents
  */
  loadPosts() {
    return fetch('https://marketplace-7a251.firebaseio.com/Postings.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          load: false,
          dataSource: ds.cloneWithRows(responseJson),
        });
      })
      .catch((err) => {
        // Alert.alert(err);
      });
  }
 /**
 * Contains the layout and displays the browse page of the application when
 * called.
 */
  render() {
    if (this.state.load) {
      return <Spinner size="large" />;
    }

    return (
      <PageView>
        <View style={styles.topBar}>
          <View style={styles.topLeftIcon}>
            <NewPostDialogue />
          </View>
          <Header headerText="Browse"/>
          <View style={styles.topRightIcon}>
            <DeletePostDialogue />
          </View>
        </View>
        <View style={{flex: 1}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={item => <Post {...item} />}
            />
        </View>
      </PageView>
    );
  }
}

const styles = {
  container: {
    paddingTop: 20,
    flex: 1,
  },
  oneThirdScreen: {
    width: Dimensions.get('window').width / 3,
    backgroundColor: '#FFF',
  },
  rightThird: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 3,
    backgroundColor: 'skyblue',
  },
  textStyle: {
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 24,
    color: '#007aff',
  },
  rightButtonText: {
    color: '#007aff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  topLeftIcon: {
    paddingLeft: 20,
  },
  topRightIcon: {
    paddingRight: 20,
    paddingTop: 10,
  }
};

export default Browse;
