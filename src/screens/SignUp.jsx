/* eslint-disable react/prop-types */
// src/Signup.js
import  { useState } from 'react';
 

const SignUp = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(email, password);
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h2 className="title">Sign Up</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="button">Sign Up</button>
        </form>
        <p className="text">
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
