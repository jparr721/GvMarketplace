import React from 'react';
import { TextInput, View, Text } from 'react-native';

/**
* Reusable input
* @param {state} label - Label prop
* @param {state} value - Value prop
* @param {state} onChangeText - Change text listener prop
* @param {state} placeholder - Placeholder text prop
* @param {state} secureTextEntry - Secure Text entry prop
*/
const LoginInput = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        autoCapitalize={'none'}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 24,
    lineHeight: 23,
    flex: 2,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    alignItems: 'center',
  }
};

export { LoginInput };
