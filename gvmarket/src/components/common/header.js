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
    height: 50,
    backgroundColor: '#2980b9',
  },
  textStyle: {
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 32,
    fontWeight: '500',
    flex: 1,
    color: 'white',
  },
};

export { Header };
