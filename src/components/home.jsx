import React from 'react';

const Home = ({ user, onLogout }) =>
  <div>
    <h1>Hello {user.name}!</h1>
    <p>Your token is: {user.token}</p>
    <p>Contact: {user.email}</p>
    <button onClick={onLogout}>Logout</button>
  </div>

export default Home;
