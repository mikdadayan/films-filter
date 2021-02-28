import AuthActionTypes from "./auth.types";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  USERS_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} = AuthActionTypes;

export const registerUser = (username, password) => async (dispatch) => {
  try {
    if (username.trim().length > 0 && password.trim().length > 0) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const result = users.find((user) => user.username === username);
      if (result) {
        dispatch({
          type: SIGNUP_FAIL,
        });
        throw new Error("User already exists!");
      }
      const newUser = {
        username,
        password,
        id: Math.round(Math.random() * 100000),
      };
      users.push(newUser);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: users,
      });

      localStorage.setItem("users", JSON.stringify(users));
      let d = new Date();
      d.setTime(d.getTime() + 60 * 1000);
      cookies.set("isLoggedIn", true, { expires: d });
    } else {
      dispatch({
        type: SIGNUP_FAIL,
      });
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const loginUser = (username, password) => async (dispatch) => {
  try {
    if (username.trim().length > 0 && password.trim().length > 0) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const result = users.find((user) => {
        return user.username === username && user.password === password;
      });
      if (result) {
        dispatch({
          type: LOGIN_SUCCESS,
        });
        let d = new Date();
        d.setTime(d.getTime() + 60 * 1000);
        cookies.set("isLoggedIn", true, { expires: d });
      } else {
        dispatch({
          type: LOGIN_FAIL,
        });
        throw new Error("Authentication failed. Wrong credentials!");
      }
    } else {
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const logoutUser = () => async (dispatch) => {
  document.cookie = "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; ";
  dispatch({ type: LOGOUT_SUCCESS });
};

export const loadUsers = (users) => async (dispatch) => {
  dispatch({
    type: USERS_LOADED,
    payload: { users },
  });
};
