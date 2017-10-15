import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

/**
* Page View component to enfore styling
* @param {props} children - General Props object
* @param {props} value - General Props object
* @param {props} onChangeText - General Props object
* @param {props} placeholder - General Props object
*/

const SearchBar = ({ children, value, onChangeText, placeholder }) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.iconStyle}>{children}</View>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        style={styles.inputStyle}
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
    padding: 3,
    fontSize: 22,
    lineHeight: 26,
    flex: 8,
  },
  iconStyle: {
    paddingLeft: 10,
    height: 40,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
}

export { SearchBar };
