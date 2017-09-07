import React from 'react';
import { View } from 'react-native';

const PageView = (props) => {
  return (
    <View style={{ padding: 10, flex: 1 }}>
      {props.children}
    </View>
  );
};

export { PageView };
