import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  container: {
    height: 70,
    backgroundColor: '#FBC02D',
  },
  textStyle: {
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 32,
    fontWeight: '500',
    flex: 1,
    color: 'white',
  },
};

export { Header };
