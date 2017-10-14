import React, {Component}  from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import {connect} from 'react-redux';
import { setUserSettingsModalVisible } from '../../actions';

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
    paddingTop: 20,
  },
  textWrapper: {
    alignItems: 'center',
    flex: 1,
    height: 42,
  },
  textStyle: {
    fontSize: 32,
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

const Header = connect(
  mapStateToProps,
  mapDispatchToProps)
(HeaderContainer);


export { Header };
