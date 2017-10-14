import React, { Component } from 'react';
import { Modal, TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { setNewPostModalVisible } from '../../actions';

// common
import { PageView, Card, CardSection, Input, Button } from '../../components/common';

class NewPostDialogueContainer extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('postings');
    this.state = { postTitle: '', price: '', description: '' };
  }

  onTitleChange(value) {
    this.setState({ postTitle: value });
  }

  onPriceChange(value) {
    this.setState({ price: value });
  }

  onDescriptionChange(value) {
    this.setState({ description: value });
  }

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
          <View>
            <View style={styles.header}>
              <TouchableOpacity
                style={{marginRight: 30}}
                onPress={() => { this.props.setNewPostModalVisible() }}>
                <Icon
                  name={"arrow-left"}
                  type="material-community"
                  size={25}
                  color="#007aff"
                />
              </TouchableOpacity>
              <Text style={{ fontSize: 28, justifyContent: 'center', alignSelf:'center' }}>Add a new post</Text>
            </View>
            <View>
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
                <CardSection>
                  <Button
                    onPress={() => this.addPosting()}>
                    Make Post
                  </Button>
                </CardSection>
              </Card>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={{ paddingTop: 10 }}
          onPress={() => this.props.setNewPostModalVisible()}>
          <Icon
            name={"plus"}
            type="material-community"
            size={25}
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

const mapStateToProps = (state) => {
  return {
    newPostModalVisible: state.newPostModalVisible
  };
};

const mapDispatchToProps = (dispatch) => ({
  setNewPostModalVisible() {
    dispatch(setNewPostModalVisible());
  }
});

const NewPostDialogue = connect(mapStateToProps, mapDispatchToProps)(NewPostDialogueContainer);

export { NewPostDialogue };
