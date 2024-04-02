// reducer.js
import { SET_TOKEN, REMOVE_TOKEN, ON_LOGGED_IN, ON_LOGGED_OUT } from "./actionTypes";

const initialState = {
  isLoggedIn: false,
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case ON_LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case REMOVE_TOKEN:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default reducer;
