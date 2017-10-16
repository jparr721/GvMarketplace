import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) =;> {
  return (
    <View; style={styles.container}>
      <Text; style={styles.textStyle}>{props.headerText}</Text>
    </View>;
)
}
const styles = {
  container: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  textStyle: {
    paddingTop: 20,
    fontSize: 26,
    fontWeight: '700',
    flex: 1,
    color: '#0d67a2',
  },
};

export { Header };
