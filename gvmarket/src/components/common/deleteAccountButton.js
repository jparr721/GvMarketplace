import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

/**
* Creates a reusable button
*/
const DeleteAccountButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#FA8258',
    fontSize: 22,
    fontWeight: '500',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5
  }
};

export { DeleteAccountButton };
