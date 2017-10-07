import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
//import { Button } from 'native-base';
import { PageView, Card, Button } from './common';

const styles = {
  container: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  nameText: {
    marginTop: 32,
    marginBottom: -10,
    fontSize: 48,
    fontWeight: '700',
    color: '#0d67a2',
  },
  editProfileText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#0d67a2',
  },
  profilePic: {
    height: 75,
    width: 75,
    borderRadius: 35,
    paddingRight: 30,
    marginTop: 15,
  },
  rightCol: {
    textAlign: 'right',
  },
  editProfileBtn: {
  marginLeft: -13,
  },
  btnList: {
    borderTopWidth: 0.5,
    borderTopColor: '#d3d3d3',
    width: null,
  },
  btnListText: {
    color: '#0d67a2',
    fontWeight: '400',
    fontSize: 15,
  },

};

class Profile extends Component {
  render() {
    return (
      <PageView>
        
      </PageView>
    );
  }
}

export default Profile;
