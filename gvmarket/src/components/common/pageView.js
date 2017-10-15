import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
* Page View component to enfore styling
* @param {props} - General Props object
*/
const PageView = (props) => {
  return (
    <View style={[styles.container]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export { PageView };
