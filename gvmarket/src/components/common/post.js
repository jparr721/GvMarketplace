import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button, Card, CardSection } from '../common';

/**
* Pure Component to house postings
*/
class Post extends PureComponent {
  render() {
    return (
      <Card>
        <CardSection>
          <View style={styles.buttonLayout}>
            <Text style={styles.postTitle}>{this.props.title}</Text>
            <TouchableOpacity>
              <Icon
                name="delete-forever"
                type="material-community"
                size={28}
                color="#f75a45" />
              </TouchableOpacity>
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
            <TouchableOpacity>
              <Icon
                name="message-plus"
                type="material-community"
                size={28}
                color="#17c10b" />
              </TouchableOpacity>
          </View>
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  postTitle: {
    fontSize: 28,
    alignSelf: 'center',
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
