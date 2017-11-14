import React, { Component } from 'react';
import { Modal, TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import fb from 'firebase';
import { setNewPostModalVisible } from '../../actions';

// common
import { PageView, Card, CardSection, Input, Button } from '../../components/common/index';

/**
* Creates the posting dialog modal
*/

class NewPostDialogueContainer extends Component {

  /**
  * Constructor to initialize state objects
  */
  constructor() {
    super();
    let user = fb.auth().currentUser;
    let name = user.email;
    this.ref = firebase.firestore().collection('postings');
    this.state = { postTitle: '', price: '', description: '', user: name };
  }

  /**
  * Listens for the state of the title variable being changed
  * @param {string} value - this is the value stored
  */
  onTitleChange(value) {
    this.setState({ postTitle: value });
  }

  /**
  * Listens for the state of the price variable being changed
  * @param {string} value - this is the value stored
  */
  onPriceChange(value) {
    this.setState({ price: value });
  }

  /**
  * Listens for the state of the description variable being changed
  * @param {string} value - this is the value stored
  */
  onDescriptionChange(value) {
    this.setState({ description: value });
  }

  /**
  * Adds the value to the database
  */
  addPosting() {
    this.ref.add({
      title: this.state.postTitle,
      price: this.state.price,
      description: this.state.description,
      user: this.state.user,
    });

    this.setState({
      postTitle: '',
      price: '',
      description: '',
      user: this.state.user,
    });
  }

  render() {
    return (
      <PageView>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.props.newPostModalVisible}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.header}>
              <TouchableOpacity
                style={{marginRight: 30}}
                onPress={() => { this.props.setNewPostModalVisible() }}>
                <Icon
                  name={"arrow-left"}
                  type="material-community"
                  size={24}
                  color="#007aff"
                />
              </TouchableOpacity>
              <Text style={styles.headerText}>Make a post</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'column'}}>
              <Card>
                <CardSection>
                  <Input
                    placeholder="Title"
                    label="Post title"
                    onChangeText={(text) => this.onTitleChange(text)}
                    value={this.state.postTitle}
                  />
                </CardSection>
                <CardSection>
                  <Input
                    placeholder="Price"
                    label="Price ($)"
                    onChangeText={(text) => this.onPriceChange(text)}
                    value={this.state.price}
                    />
                </CardSection>
                <CardSection>
                  <Input
                    placeholder="Description (optional)"
                    label="Description"
                    onChangeText={(text) => this.onDescriptionChange(text)}
                    value={this.state.description}
                  />
                </CardSection>
            </Card>
              <Button
                onPress={() => this.addPosting()}>
                Publish
              </Button>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={{ paddingTop: 10 }}
          onPress={() => this.props.setNewPostModalVisible()}>
          <Icon
            name={'plus'}
            type="material-community"
            size={24}
            color="#007aff"
          />
        </TouchableOpacity>
      </PageView>
    );
  }
}

const styles = {
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 30,
    backgroundColor: '#A0A0A0'
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
    newPostModalVisible: state.newPostModalVisible
  };
};

/**
* Maps dispatch to the props object so the Redux Store knows which function to call
* @param {state} dispatch - The function call mechanism
*/
const mapDispatchToProps = (dispatch) => ({
  setNewPostModalVisible() {
    dispatch(setNewPostModalVisible());
  }
});

const NewPostDialogue = connect(mapStateToProps, mapDispatchToProps)(NewPostDialogueContainer);

export { NewPostDialogue };
