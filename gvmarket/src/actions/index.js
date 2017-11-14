import firebase from 'firebase';
import { LOGIN, 
  LOGIN_SUCCESS, 
  LOGIN_FAIL, 
  EMAIL_FIELD_CHANGED, 
  PASSWORD_FIELD_CHANGED, 
  SET_NEW_POST_MODAL_VISIBLE,
  SET_NEW_EMAIL_MODAL_VISIBLE } from '../../constants';

/**
* When a failed login attempt occurs, the LOGIN_FAIL variable is updated
* and the proper code is triggered from the file ../reducers/index.js to
* handle the changes in the app.
* @param {dispatch} - general dispatch event
*/
export const loginFail = (dispatch) => {
  dispatch({ type: LOGIN_FAIL });
};

/**
* When a login is successful, the LOGIN_SUCCESS variable is updated and the
* proper code is triggered from the file ../reducers/index.js to handle the
* changes in the app.
* @param {dispatch} - general dispatch object
* @param {user} user - current state of the user
*/
export const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user,
  });
};

/**
* Updates the inputted user email whenever called.
* @param {string} data - the users email
*/
export const getEmailInput = (data) => {
  return {
    type: EMAIL_FIELD_CHANGED,
    payload: data,
  };
};

/**
* Updates the inputted user password whenever called.
* @param {string} data - the users password
*/
export const getPasswordInput = (data) => {
  return {
    type: PASSWORD_FIELD_CHANGED,
    payload: data,
  };
};

/**
* Makes use of the functions in this class. This handles the attempt at a
* login and directs the user to the proper area depending on whether the
* login is a success or failure.
* @param {string} email - inputted user email
* @param {string} password - inputted user password
*/
export const login = ( email, password ) => {
  return (dispatch) => {
    dispatch({ type: LOGIN });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginSuccess(dispatch, user))
          .catch(() => loginFail(dispatch))
      });
  };
};

/**
* Makes the new post modal visible when called.
*/
export const setNewPostModalVisible = () => {
  return {
    type: SET_NEW_POST_MODAL_VISIBLE
  }
};
/**
* Makes the new email modal visible when called.
*/
export const setNewEmailModalVisible = () => {
  return {
    type: SET_NEW_EMAIL_MODAL_VISIBLE
  }
};

