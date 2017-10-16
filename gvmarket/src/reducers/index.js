import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, EMAIL_FIELD_CHANGED, PASSWORD_FIELD_CHANGED, SET_NEW_POST_MODAL_VISIBLE } from '../../constants';

/**
* Sets the initial state of the users activity
*/
export const initialState = {
  email: '',
  password: '',
  error: '',
  user: null,
  loading: false,
  loggedIn: false,
  newPostModalVisible: false,
};

/**
* Contains the logic that is to be implemented depending on the action that is
* passed as an argument.
* Handles logins (successes and failures), email / password field changes, and
* the visibility of the modal window.
* @param {state} - state of the users activity
* @param {string} action - the action to be performed
*/
function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
        loggedIn: false,
        error: 'Logging in!',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
        error: '',
        loading: false,
        loggedIn: true,
        user: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: 'Authentication Failed. Try again.',
        password: '',
        loggedIn: false,
        loading: false,
      };
    case EMAIL_FIELD_CHANGED:
      return {
        ...state,
        email: action.payload,
      };
    case PASSWORD_FIELD_CHANGED:
      return {
        ...state,
        password: action.payload,
      };
    case SET_NEW_POST_MODAL_VISIBLE:
      return {
        ...state,
        newPostModalVisible: !state.newPostModalVisible,
      };
    default:
      return state;
  }
}

export default appReducer;
