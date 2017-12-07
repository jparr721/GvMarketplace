import React, { Component } from 'react';
import { Modal, TouchableOpacity, View, Text, Linking } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import fb from 'firebase';
import { setNewEmailModalVisible } from '../../actions';

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

 /**
 * Listens for change in the state of the emaila ddress
 * @param {string} value - This is the stored email
 **/
 onEmailChange(value) {
    this.setState({ emailAddr: value });
 }

/**
* Displays the email dialogue for the user 
* to enter the name of the person they wish to contact.
*/
 sendEmail() {
   Linking.openURL(`mailto:${this.state.emailAddr}?subject=${this.state.subject}&body=${this.state.body}`);
 }

 render() {
  return (
    <PageView>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={this.props.newEmailModalVisible}
        >
        <View style={{ flex: 1 }}>
          <View style={styles.header}>
            <TouchableOpacity
                style={{marginRight: 30}}
                onPress={() => { this.props.setNewEmailModalVisible() }}>
                <Icon
                  name={"arrow-left"}
                  type="material-community"
                  size={24}
                  color="#007aff"
                />
            </TouchableOpacity>
            <Text style={styles.headerText}>New Email</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Card>
              <CardSection>
                <Input
                  placeholder="Email Subject"
                  label="Subject"
                  onChangeText={(text) => this.onSubjectChange(text)}
                  value={this.state.subject}
                  />
              </CardSection>
              <CardSection>
                <Input
                  placeholder="Say something nice"
                  label="Message"
                  onChangeText={(text) => this.onBodyChange(text)}
                  value={this.state.body}
                  />
              </CardSection>
              <CardSection>
                <Input
                  placeholder="Email address"
                  label="Email"
                  onChangeText={(text) => this.onEmailChange(text)}
                  value={this.state.emailAddr}
                  />
              </CardSection>
              <CardSection>
                <Button onPress={() => this.sendEmail()}>
                  Send Email
                </Button>
              </CardSection>
            </Card>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => this.props.setNewEmailModalVisible()}>
        <Icon
          name="message-plus"
          type="material-community"
          size={28}
          color="#17c10b" />
      </TouchableOpacity>
    </PageView>
  );
 }
}

const styles = {
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 30,
    paddingBottom: 10,
    paddingTop: 30,
    backgroundColor: '#17c10b'
  },
  headerText: {
    color: '#000',
    fontSize: 24,
  },
}

/**
* Maps state to the props object for reference in the Redux Store
* @param {state} state - The state of the referenced object
*/
const mapStateToProps = (state) => {
  return {
    newEmailModalVisible: state.newEmailModalVisible
  };
};

/**
* Maps dispatch to the props object so the Redux Store knows which function to call
* @param {state} dispatch - The function call mechanism
*/
const mapDispatchToProps = (dispatch) => ({
  setNewEmailModalVisible() {
    dispatch(setNewEmailModalVisible());
  }
});

const NewEmailDialogue = connect(mapStateToProps, mapDispatchToProps)(NewEmailDialogueContainer);

export { NewEmailDialogue };