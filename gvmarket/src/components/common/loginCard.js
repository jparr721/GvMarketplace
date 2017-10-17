import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
* Creates a reusable card
*/
const LoginCard = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
});

export { LoginCard };
