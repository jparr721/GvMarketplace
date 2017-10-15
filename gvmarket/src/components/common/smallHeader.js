import React from 'react';
import { Text, View } from 'react-native';

/**
* Small header for sub text
* @param {props} props - General Props object
*/
const SmallHeader = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
);
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    height: 40,
    position: 'relative'
  },
  textStyle: {
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: '700',
  }
};

export { SmallHeader };
