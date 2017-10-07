import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet,View, Text, Modal} from 'react-native';
import { Icon } from 'react-native-elements';
import { NewEntryDialogue } from './newEntryDialogue';

const styles = StyleSheet.create({
  header:{
    flexDirection: "row",
    alignItems:"flex-start",
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor:'#42a5f5'
  },
  headerText:{
    color: "#eceff1",
    fontSize: 20,

  }
});

class HeaderButton extends Component {


  render() {
    return (
      <Text />
    );
  }
}

export { HeaderButton };
