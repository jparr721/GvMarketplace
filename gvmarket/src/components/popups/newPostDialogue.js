import React, { Component } from 'react';
import { Modal, TouchableOpacity, View, Text } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { setNewPostModalVisible } from '../../actions';


// common
import { Header, PageView, Card, CardSection, Input } from '../../components/common';

class NewPostDialogueContainer extends Component {
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
                  color='#0d67a2'
                />
              </TouchableOpacity>
              <Header headerText="Make a new posting" />
            </View>
            <View style={{padding: 10}}>
              <Text>Enter item details or use the camera!</Text>
              <Card>
                <CardSection>
                  <Input
                    placeholder="Title"
                    label="Post title"
                    onChangeText={(text) => this.props.onTitleChange(text)}
                    value={this.props.postTitle}
                  />
                </CardSection>
                <CardSection>
                  <Input
                    placeholder="Price"
                    label="Price ($)"
                    onChangeText={(text) => this.props.onPriceChange(text)}
                    value={this.props.price}
                  />
                </CardSection>
              </Card>
              <Card>
                <CardSection>
                  <Input
                    placeholder="Description (optional)"
                    label="Description"
                    onChangetext={(text) => this.props.onDescriptionChange(text)}
                    value={this.props.description}
                   />
                </CardSection>
              </Card>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() => this.props.setNewPostModalVisible()}>
          <Icon
            name={"plus"}
            type="material-community"
            size={25}
            color='#0d67a2'
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
    color: '#0d67a2',
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
