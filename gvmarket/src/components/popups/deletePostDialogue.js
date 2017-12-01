import React, { Component } from 'react';
import { Modal, TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import axios from 'axios';
import firebase from 'firebase';
import { setDeletePostModalVisible } from '../../actions';

// common
import { PageView, Card, CardSection, Input, Button } from '../../components/common/index';

/**
*	Creates dialogue to delete a post
**/

class DeletePostDialogueContainer extends Component {
	constructor(){
		super();
		let user = firebase.auth().currentUser;
		let name = user.email;
		this.state = { title: '', user: name, delete: false };
	}

	onTitleChange(value) {
		this.setState({ title: value });
	}

  showDeleteButton() {
    if (this.state.title != '') {
      this.state.delete = true;
    }
    return (this.state.delete) ? <Button onPress={() => this.deletePost()}>Delete Post</Button> : <CardSection />
  }

	deletePost() {
    axios.delete(`https://marketplace-7a251.firebaseio.com/Postings/${this.state.title}.json`).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });

    this.setState({
      title: '',
    });
	}

	render() {
		return (
			<PageView>
				<Modal
					animationType={'slide'}
					transparent={false}
					visible={this.props.deletePostModalVisible}
				>
					<View style={{ flex: 1 }}>
            <View style={ styles.header }>
              <TouchableOpacity
                style={{ marginRight: 30 }}
                onPress={() => this.props.setDeletePostModalVisible() }>
                  <Icon
                    name={'arrow-left'}
                    type='material-community'
                    size={24}
                    color="#007aff" />
              </TouchableOpacity>
              <Text style={ styles.headerText }>Are you sure?</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'column' }}>
              <Card>
                <CardSection>
                  <Text style={ styles.warningText }>Deleting a post can result in a lost sale, please enter the post name to be sure.</Text>
                </CardSection>
                <CardSection>
                  <Input  
                    placeholder="Title"
                    label="Post Title"
                    onChangeText={(text) => this.onTitleChange(text)}
                    value={this.state.title}
                    />
                </CardSection>
              </Card>
              {this.showDeleteButton()}
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={{ paddingTop: 10 }}
          onPress={() => this.props.setDeletePostModalVisible()}>
          <Icon
            name='delete-forever'
            type='material-community'
            size={28}
            color='#f75a45' />
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
    backgroundColor: '#f75a45',
  },
  headerText: {
    color: '#fff',
    fontSize: 28,
  },
  warningText: {
    fontSize: 22,
    color: '#f3e826',
    alignItems: 'center',
  },
}

/**
* Maps state to the props object for reference in the Redux Store
* @param {state} state - The state of the referenced object
*/
const mapStateToProps = (state) => {
  return {
    newDeletePostModalVisible: state.newDeletePostModalVisible,
  };
};

/**
* Maps dispatch to the props object so the Redux Store knows which function to call
* @param {state} dispatch - The function call mechanism
*/
const mapDispatchToProps = (dispatch) => ({
  setDeletePostModalVisible() {
    dispatch(setDeletePostModalVisible());
  }
});

const DeletePostDialogue = connect(mapStateToProps, mapDispatchToProps)(DeletePostDialogueContainer);

export { DeletePostDialogue };
