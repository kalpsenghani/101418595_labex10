import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';  // Ensure this line is at the top of the file


const App = () => {
  const renderRoute = () => {
    const path = window.location.pathname;
    if (path === '/signup') return <Signup />;
    if (path === '/login') return <Login />;
    if (path === '/dashboard') return <Dashboard />;
    return <h1>404: Page Not Found</h1>;
  };

  return (
    <div>
      <nav>
        <a href="/signup">Signup</a> | <a href="/login">Login</a> |{' '}
        <a href="/dashboard">Dashboard</a>
      </nav>
      {renderRoute()}
    </div>
  );
};

export default App;
