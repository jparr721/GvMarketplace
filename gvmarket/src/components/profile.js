import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';
import { Button } from 'native-base';

import { Header, PageView, SmallCard } from './common/index';

const styles = {
  container: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
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
    height: 100,
    width: 100,
    borderRadius: 30,
    paddingRight: 30,
    marginTop: 32,
  },
  rightCol: {
    textAlign: 'right',
  },
  editProfileBtn: {
    marginLeft: -13,
  }
};

class Profile extends Component {
  render() {
    return (
      <PageView>
        <Header headerText="" />
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{justifyContent: 'flex-start'}}>
            <Text style={styles.nameText}>Julia< /Text>
            <Button small transparent style={styles.editProfileBtn}><Text style={styles.editProfileText}>View and edit profile</Text></Button>
          </View>
          <View style={{width: 75}} />
          <View><Image style={styles.profilePic} source={require('./imgs/example-headshot.jpg')}/></View>
        </View>
      </PageView>
    )
  }
}

export default Profile;
