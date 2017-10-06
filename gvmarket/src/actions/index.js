import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, EMAIL_FIELD_CHANGED, PASSWORD_FIELD_CHANGED } from '../../constants';

export const login = () => {
  return {
    type: 'LOGIN'
  }
};

export const loginFail = () => {
  return {
    type: LOGIN_FAIL
  };
}

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  };
}

function getEmailInput(data) {
  return {
    type: EMAIL_FIELD_CHANGED,
    console.log(data);
    data
  };
}

function getPasswordInput(data) {
  return {
    type: PASSWORD_FIELD_CHANGED,
    console.log(data);
    data
  };
}
