import React from 'react';

const Login = () => {
  return (
    <div className="container">
      <h1>Welcome Back</h1>
      <h2>Login to Your Account</h2>
      <form>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
