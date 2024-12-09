import { createStore, applyMiddleware } from 'redux';
import authReducer from './reducer/authReducer'; // Update this path
import { thunk } from 'redux-thunk';

const store = createStore(
  authReducer,
  applyMiddleware(thunk)
);

export default store;
