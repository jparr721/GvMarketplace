import React from 'react';
import { View, StyleSheet } from 'react-native';

const PageView = (props) => {
  return (
    <View style={[styles.container, StyleSheet.absoluteFill]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1
  },
});

export { PageView };
