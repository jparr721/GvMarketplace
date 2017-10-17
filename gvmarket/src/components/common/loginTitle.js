import React, {Component}  from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import {connect} from 'react-redux';
import { setUserSettingsModalVisible } from '../../actions';

/**
* Creates a reusable header component
*/
class LoginTitleContainer extends Component {
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
    paddingTop: 0,
  },
  textWrapper: {
    alignItems: 'center',
    flex: 1,
    height: 50,
  },
  textStyle: {
    fontSize: 48,
    fontWeight: '700',
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

const LoginTitle = connect(
  mapStateToProps,
  mapDispatchToProps)
(LoginTitleContainer);


export { LoginTitle };
