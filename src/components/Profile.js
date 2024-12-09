import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authactions';

const Profile = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (!auth.isAuthenticated) {
    return <p>Please log in.</p>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Welcome, {auth.user.name}!</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Profile;
