import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import firebase from 'react-native-firebase';

import { PageView, SearchBar, Card, CardSection, Header, Spinner, Post } from './common/index';
import { NewPostDialogue } from './popups/newPostDialogue';

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
};

class Browse extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('postings');
    this.unsubscribe = null;

    this.state = {
      load: true,
      postings: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCollectionUpdate = (querySnapshot) => {
    const postings = [];
    querySnapshot.forEach((doc) => {
      const { title, price, description } = doc.data();
      postings.push({
        key: doc.id,
        doc, // DocumentSnapshot
        description,
        price,
        title,
      });
    });
    this.setState({
      postings,
      load: false,
   });
 }

  render() {
    if (this.state.load) {
      return <Spinner size="large" />;
    }

    return (
      <View style={styles.container}>
        <Header headerText="Browse">
          <NewPostDialogue />
        </Header>
        <FlatList
          data={this.state.postings}
          renderItem={({ item }) => <Post {...item} />}
        />

      </View>
    );
  }
}

export default Browse;


// For later use

{/* <View style={{ flex: 1, flexDirection: 'column' }}>
  <View>
    <Card>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={styles.oneThirdScreen}>
          <Text style={styles.textStyle}>Tutoring</Text>
        </View>
        <View style={styles.oneThirdScreen} />
        <View style={styles.oneThirdScreen}>
          <Button transparent full>
            <Text style={styles.rightButtonText}>Tutoring ></Text>
          </Button>
        </View>
      </View>
    </Card>
  </View>
</View>

<View style={{ flex: 1, flexDirection: 'column' }}>
  <View>
    <Card>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={styles.oneThirdScreen}>
          <Text style={styles.textStyle}>Housing</Text>
        </View>
        <View style={styles.oneThirdScreen} />
        <View style={styles.oneThirdScreen}>
          <Button transparent full>
            <Text style={styles.rightButtonText}>Housing ></Text>
          </Button>
        </View>
      </View>
    </Card>
  </View>
</View>

<View style={{ flex: 1, flexDirection: 'column' }}>
  <View>
    <Card>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={styles.oneThirdScreen}>
          <Text style={styles.textStyle}>For Sale</Text>
        </View>
        <View style={styles.oneThirdScreen} />
        <View style={styles.oneThirdScreen}>
          <Button transparent full>
            <Text style={styles.rightButtonText}>For Sale ></Text>
          </Button>
        </View>
      </View>
    </Card>
  </View>
  </View> */}
