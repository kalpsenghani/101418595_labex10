// src/redux/reducers/authReducer.js
import { SIGNUP_SUCCESS, LOGIN_SUCCESS, LOGOUT } from '../actions/authactions';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        token: action.payload.token
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null
      };
    default:
      return state;
  }
};

export default authReducer;
