// store.js
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import reducer from "./reducer";
import { setAuthenticationHeader } from "../utils/authenticate";
import { onLoggedIn, setToken } from "./actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const token = localStorage.getItem("jsonwebtoken");
setAuthenticationHeader(token);

// Perform a dispatch to change the global state
if (token) {
  store.dispatch(onLoggedIn());
  store.dispatch(setToken(token));
}

export default store;
