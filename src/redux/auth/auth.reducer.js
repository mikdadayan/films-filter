import AuthActionTypes from "./auth.types";
import Cookies from "universal-cookie";


const {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  USERS_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} = AuthActionTypes;

const INITIAL_STATE = {
  users: [],
  isAuthenticated: document.cookie.split("=")[1] ? true : false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USERS_LOADED:
      return { ...state, users: payload.users };
    case SIGNUP_SUCCESS:
      return { ...state, users: payload.newUsers, isAuthenticated: true };
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true };
    case SIGNUP_FAIL:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
      return { ...state, users: state.users, isAuthenticated: false };
    default:
      return state;
  }
};

export default authReducer;
