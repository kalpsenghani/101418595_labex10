// src/components/Dashboard.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authactions'; // You'll create this action

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="dashboard-container">
      {user ? (
        <>
          <h2>Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
