import firebase from 'firebase';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, EMAIL_FIELD_CHANGED, PASSWORD_FIELD_CHANGED } from '../../constants';

export const loginFail = (dispatch) => {
  dispatch({ type: LOGIN_FAIL });
};

export const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user,
  });
};

export const getEmailInput = (data) => {
  return {
    type: EMAIL_FIELD_CHANGED,
    payload: data,
  };
};

export const getPasswordInput = (data) => {
  return {
    type: PASSWORD_FIELD_CHANGED,
    payload: data,
  };
};

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

export const setNewPostModalVisible = () => {
  return {
    type: 'SET_NET_POST_MODAL_VISIBLE'
  }
};
