import React, { Component } from 'react';
import { Modal, TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { setNewPostModalVisible } from '../../actions';

// common
import { PageView, Card, CardSection, Input, Button, ButtonCard, LoginCard } from '../../components/common/index';

/**
* Creates the posting dialog modal
*/

class NewPostDialogueContainer extends Component {

  /**
  * Constructor to initialize state objects
  */
  constructor() {
    super();
    this.ref = firebase.firestore().collection('postings');
    this.state = { postTitle: '', price: '', description: '' };
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
    });

    this.setState({
      postTitle: '',
      price: '',
      description: '',
    });
  }

  render() {
    return (
      <PageView>
        <Modal
          animationtype={"slide"}
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
                  size={40}
                  color="#007aff"
                />
              </TouchableOpacity>
              <Text style={{ flex: 1, fontSize: 28, justifyContent: 'center', alignSelf:'center' }}>Make a post</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
              <ButtonCard>
                <Input
                  placeholder="Title"
                  label="Post title"
                  onChangeText={(text) => this.onTitleChange(text)}
                  value={this.state.postTitle}
                />
              </ButtonCard>

              <ButtonCard>
                <Input
                  placeholder="Price"
                  label="Price ($)"
                  onChangeText={(text) => this.onPriceChange(text)}
                  value={this.state.price}
                />
              </ButtonCard>

              <ButtonCard>
                <Input
                  placeholder="Description (optional)"
                  label="Description"
                  onChangeText={(text) => this.onDescriptionChange(text)}
                  value={this.state.description}
                />
              </ButtonCard>

              <ButtonCard>
                <Button>
                  Add photo
                </Button>
              </ButtonCard>

              <ButtonCard>
                <Button>
                  Add photo
                </Button>
              </ButtonCard>

              <ButtonCard>
                <Button
                  onPress={() => this.addPosting()}>
                  Publish
                </Button>
              </ButtonCard>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={{ paddingTop: 10 }}
          onPress={() => this.props.setNewPostModalVisible()}>
          <Icon
            name={"plus"}
            type="material-community"
            size={40}
            color='#007aff'
          />
        </TouchableOpacity>
      </PageView>
    );
  }
}

const styles = {
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 20,
    backgroundColor: '#fff'
  },
  headerText: {
    color: '#007aff',
    fontWeight: '700',
    fontSize: 24,
  }
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
