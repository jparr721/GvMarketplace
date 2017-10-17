import React from 'react';
import { View } from 'react-native';

/**
* Creates a reusable card section to be housed by the parent card
*/
const ButtonCard = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#fff',
    position: 'relative'
  }
};

export { ButtonCard };
