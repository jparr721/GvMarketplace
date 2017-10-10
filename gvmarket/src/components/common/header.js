import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.textStyle}>{props.headerText}</Text>
      </View>
      {props.children}
    </View>
  );
};

const styles = {
  container: {
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textWrapper: {
    alignItems: 'center',
    flex: 1,
    height: 50,
  },
  textStyle: {
    fontSize: 26,
    fontWeight: '700',
    flex: 1,
    color: '#007aff',
  },
};

export { Header };
