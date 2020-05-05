import { login, signup } from '../util/api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

const loginRequest = { type: LOGIN_REQUEST };
const loginSuccess = token => ({ type: LOGIN_SUCCESS, token });
const loginError = error => ({ type: LOGIN_ERROR, error });

export const attemptLogin = (username, password) => async dispatch => {
  dispatch(loginRequest);
  try {
    const token = await login(username, password);
    dispatch(loginSuccess(token));
  } catch (error) {
    dispatch(loginError(error));
  }
};

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

const signupRequest = { type: SIGNUP_REQUEST };
const signupSuccess = success => ({ type: SIGNUP_SUCCESS, success });
const signupError = error => ({ type: SIGNUP_ERROR, error });

export const attemptSignup = (username, password, email) => async dispatch => {
  dispatch(signupRequest);
  try {
    const success = await signup(username, password, email);
    dispatch(signupSuccess(success));
  } catch (error) {
    dispatch(signupError(error));
  }
};

export const LOGOUT = 'LOGOUT';
export const logout = () => ({ type: LOGOUT });
