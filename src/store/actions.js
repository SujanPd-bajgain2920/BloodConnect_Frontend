// actions.js
import {  ON_LOGGED_IN, ON_LOGGED_OUT, SET_TOKEN, REMOVE_TOKEN } from "./actionTypes";



export const onLoggedIn = () => {
  return {
    type: ON_LOGGED_IN,
  };
};

export const onLoggedOut = () => {
  return {
    type: ON_LOGGED_OUT,
  };
};

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};

export const removeToken = () => {
  return {
    type: REMOVE_TOKEN,
  };
};