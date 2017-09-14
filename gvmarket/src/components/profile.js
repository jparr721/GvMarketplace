import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Button } from 'native-base';
import { PageView, Card } from './common/index';

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
  tipTitleText: {
    fontSize: 23,
    color: '#0d67a2',
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    backgroundColor: '#e7e7e7',
  },
  tipText: {
    fontSize: 16,
    color: '#0d67a2',
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  tipTextFinalEntry: {
    fontSize: 16,
    color: '#0d67a2',
    padding: 5,
  },
};

class Profile extends Component {
  render() {
    return (
      <PageView>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'flex-start' }}>
              <Text style={styles.nameText}>Julia</Text>
              <Button small transparent style={styles.editProfileBtn}><Text style={styles.editProfileText}>View and edit profile</Text></Button>
            </View>
            <View style={{ width: 75 }} />
            <View><Image style={styles.profilePic} source={require('./imgs/example-headshot.jpg')} /></View>
          </View>
        </View>
        <View>
          <ScrollView>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View>
                <Card>
                  <Text style={styles.tipTitleText}>Tips</Text>
                  <Text style={styles.tipText}>This is where tips will be cycled through.</Text>
                  <Text style={styles.tipText}>The user can continuously swipe through the cards to reveal other tips.</Text>
                  <Text style={styles.tipTextFinalEntry}>Other examples, such as how to use this application witll also be presented to the user.</Text>
                </Card>
              </View>
              <View><Button large full transparent style={styles.btnList}><Text style={styles.btnListText}>My posts</Text></Button></View>
              <View><Button large full transparent style={styles.btnList}><Text style={styles.btnListText}>My classes</Text></Button></View>
              <View><Button large full transparent style={styles.btnList}><Text style={styles.btnListText}>Invite Friends</Text></Button></View>
              <View><Button large full transparent style={styles.btnList}><Text style={styles.btnListText}>Settings</Text></Button></View>
              <View><Button large full transparent style={styles.btnList}><Text style={styles.btnListText}>Get help</Text></Button></View>
              <View><Button large full transparent style={styles.btnList}><Text style={styles.btnListText}>More Tips</Text></Button></View>
              <View><Button large full transparent style={styles.btnList}><Text style={styles.btnListText}>Give us feedback</Text></Button></View>
              <View><Button large full transparent style={styles.btnList}><Text style={styles.btnListText}>.</Text></Button></View>
              <View><Button large full transparent style={styles.btnList}><Text style={styles.btnListText}>.</Text></Button></View>
            </View>
          </ScrollView>
        </View>
      </PageView>
    );
  }
}

export default Profile;
