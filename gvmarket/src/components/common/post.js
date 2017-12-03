import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import firebase from 'react-native-firebase';
import fb from 'firebase';

// common
import { Button, Card, CardSection } from '../common';

// popups
import { NewEmailDialogue } from '../popups/newEmailDialogue';
import { DeletePostDialogue } from '../popups/deletePostDialogue';

/**
* Pure Component to house postings
*/
class Post extends PureComponent {

  constructor() {
    super();
  }

  render() {
    return (
      <Card>
        <CardSection>
          <View style={styles.buttonLayout}>
            <Text style={styles.postTitle}>{this.props.title}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Text style={styles.postBody}>{this.props.description}</Text>
        </CardSection>
        <CardSection>
          <Text style={styles.pricing}>${this.props.price}</Text>
        </CardSection>
        <CardSection>
          <View style={styles.buttonLayout}>
            <Text>User: {this.props.user}</Text>
            <NewEmailDialogue /> 
          </View>
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  postTitle: {
    fontSize: 28,
    color: '#007aff',
  },
  postBody: {
    fontSize: 18,
    color: '#39414f',
  },
  pricing: {
    fontSize: 18,
    color: '#05b711',
  },
  buttonLayout: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
};

export { Post };
