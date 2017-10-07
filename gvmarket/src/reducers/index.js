import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, EMAIL_FIELD_CHANGED, PASSWORD_FIELD_CHANGED } from '../../constants';

export const initialState = {
  email: '',
  password: '',
  error: '',
  user: null,
  loading: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...initialState,
        user: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: 'Authentication Failed. Try again.',
        password: '',
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
    default:
      return state;
  }
}

export default appReducer;
