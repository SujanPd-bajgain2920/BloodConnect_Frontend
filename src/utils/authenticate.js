// authenticate.js
import axios from 'axios';
import { setToken, removeToken, onLoggedIn, onLoggedOut } from '../store/actions'

export function setAuthenticationHeader(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export const loginSuccess = (token) => {
  return (dispatch) => {
    localStorage.setItem('jsonwebtoken', token);
    setAuthenticationHeader(token);
    dispatch(setToken(token));
    dispatch(onLoggedIn());
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('jsonwebtoken');
    setAuthenticationHeader(null);
    dispatch(removeToken());
    dispatch(onLoggedOut());
  };
};
