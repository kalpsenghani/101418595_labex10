import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' instead of 'react-dom'
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

// Create a root for concurrent rendering
const root = ReactDOM.createRoot(document.getElementById('root')); 

// Render your app inside the root element
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
