import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';

import { PageView, SearchBar, Card, CardSection, Header } from './common/index';
import { Button } from 'native-base';
import { Icon } from 'react-native-elements'
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
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Browse">
          <NewPostDialogue />
        </Header>

        <View style={{ flex: 1, flexDirection: 'column' }}>
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
          </View>

      </View>
    );
  }
}

export default Browse;
