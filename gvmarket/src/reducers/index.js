import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, EMAIL_FIELD_CHANGED, PASSWORD_FIELD_CHANGED } from '../../constants';

export const initialState = {
  email: '',
  password: '',
  isLoggingIn: false,
  loggedIn: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggingIn: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggingIn: false,
        loggedIn: true,
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
        isLoggingIn: false,
        loggedIn: false,
      };
    case 'EMAIL_FIELD_CHANGED':
      return {
        ...state,
        loggedIn: false,
        email: action.data,
      };
    case 'PASSWORD_FIELD_CHANGED':
      return {
        ...state,
        loggedIn: false,
        password: action.data,
      };
    default:
      return state;
  }
}

export default appReducer;
