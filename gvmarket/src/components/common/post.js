import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection } from '../common';

/**
* Pure Component to house postings
*/
class Post extends PureComponent {
  render() {
    return (
      <Card>
        <CardSection>
          <Text style={styles.postTitle}>{this.props.title}</Text>
        </CardSection>
        <CardSection>
          <Text style={styles.postBody}>{this.props.description}</Text>
        </CardSection>
        <CardSection>
          <Text style={styles.pricing}>${this.props.price}</Text>
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
};

export { Post };
