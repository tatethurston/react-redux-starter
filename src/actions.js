import { push } from 'react-router-redux';

import API from './lib/api';

const API_URL = process.env.API_URL || "http://localhost:5000";
const api = new API(API_URL);

export const API_FAILURE = 'API_FAILURE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const FLASH_DESTROY = 'FLASH_DESTROY';

// Generic error handling for Action Creators that make API calls
const APICall = (requestFn) => (...args) => async (dispatch) => {
  try {
    await dispatch(requestFn(...args));
  } catch (error) {
    const { response } = error;
    let status;
    let message;
    // TODO: Retry logic
    // NETWORK ERROR
    if (!response) {
      message = "Network Error";
    } else {
      status = response.status;
      message = response.data.error;
    }
    dispatch({
      type: API_FAILURE,
      data: { status, message }
    });
  }
}

const authenticate = (url) => (credentials) => async (dispatch) => {
  const data = await api.post(url, credentials);
  api.token = data.token;

  dispatch({
    type: LOGIN,
    data
  });
  dispatch(push('/'));
}

export const logout = () => ({ type: LOGOUT });
export const flashDestroy = () => ({ type: FLASH_DESTROY });
// We capture the user intent to create an account or login to an existing
// account via the URL, but the handling is the same from the client's
// perspective
export const login = APICall(authenticate('/sessions'));
export const register = APICall(authenticate('/users'));

