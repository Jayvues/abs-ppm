/**
 * @Author :JAY
 * Project :ABS Project Tracking System 
 * Client : React etc.,
 */

// Scecurity using JWT Token
import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";

export const createNewUser = (newUser, history) => async (dispatch) => {
  try {
    await axios.post("/api/users/register", newUser);
    history.push("/login");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
export const login = (LoginRequest) => async (dispatch) => {
  try {
    //post => Login Request
    const res = await axios.post("/api/users/login", LoginRequest);
    //extract token from res.data
    const { token } = res.data;
    //store the token in the localStorage
    localStorage.setItem("jwtToken", token);
    //set our token header ***
    setJWTToken(token);
    //decode token on React
    const decoded = jwt_decode(token);
    //dispatch to our securityReducer
    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setJWTToken(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {},
  });
};
