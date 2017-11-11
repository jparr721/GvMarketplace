import React, { Component } from 'react';
import { Modal, TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import fb from 'firebase';
import { setNewEamilModalVisible } from '../../actions';

// Common
import { PageView, Card, CardSection, Input, Button } from '../../components/common/index';

/**
* Create new Email Modal
**/
class NewEmailDialogueContainer extends Component {
  /**
  * Constructor to initialize state objects
  **/
  constructor() {
    super();
    this.ref = frebase.firestore().collection('postings');
    this.state = { subject: '', body: '', emailAddr: '' };
  }

  /**
 * Listens for change in state of email subject
 * @param {string} value - this is the stored value
 **/
 onSubjectChange(value) {
   this.setState({ subject: value });
 }

 /**
 * Listens for change in state of email body
 * @param {string} value - this is the stored value
 **/
 onBodyChange(value) {
   this.setState({ body: value });
 }

 sendEmail() {
   Linking.openURL(`mailto:${this.state.emailAddr}&subject=${this.state.subject}&body=${this.state.body}`);
 }
}