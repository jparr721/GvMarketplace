import React, {Component}  from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import {connect} from 'react-redux';
import { setUserSettingsModalVisible } from '../../actions';

/**
* Creates a reusable header component
*/
class HeaderContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.textStyle}>{this.props.headerText}</Text>
        </View>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  textWrapper: {
    alignItems: 'center',
    flex: 1,
    height: 60,
  },
  textStyle: {
    fontSize: 50,
    fontWeight: '500',
    flex: 1,
    color: '#007aff',
  },
});

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({
  displayUserMenu() {
    dispatch(setUserSettingsModalVisible());
  }

});

const Header = connect(
  mapStateToProps,
  mapDispatchToProps)
(HeaderContainer);


export { Header };
