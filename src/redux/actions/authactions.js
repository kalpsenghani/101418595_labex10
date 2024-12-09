// Action Types
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

// Signup Action
export const signup = (userData) => {
  return (dispatch) => {
    try {
      const user = {
        ...userData,
        token: 'fake-jwt-token' // Simulating token from an API
      };

      localStorage.setItem('user', JSON.stringify(user)); // Save user in localStorage
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: user
      });
    } catch (error) {
      dispatch({
        type: SIGNUP_FAIL,
        payload: error.message
      });
    }
  };
};

// Login Action
export const login = (credentials) => {
  return (dispatch) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (
      storedUser &&
      storedUser.email === credentials.email &&
      storedUser.password === credentials.password
    ) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: storedUser
      });
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: 'Invalid email or password'
      });
    }
  };
};

// Logout Action
export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('user'); // Remove user from localStorage
    dispatch({ type: LOGOUT });
  };
};
