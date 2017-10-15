import React from 'react';
import { View, ActivityIndicator } from 'react-native';

/**
* Spinner for async loading
* @param {props} props - General Props object
*/
const Spinner = (props) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={props.size || 'large'} />
    </View>
  )
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
