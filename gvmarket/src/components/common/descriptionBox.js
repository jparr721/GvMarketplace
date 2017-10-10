import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

class DescriptionBox extends Component {
  render() {
    return (
      <TextInput
        multiline={true}
        numberOfLines={5}
        editable={true}
      />
    );
  }
}

export { DescriptionBox };
