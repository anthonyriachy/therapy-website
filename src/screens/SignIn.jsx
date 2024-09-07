/* eslint-disable react/prop-types */
import  { useState } from 'react'

function SignIn({onSignIn}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn(email, password);
  };
  return (
    <div className="container">
    <div className="form-wrapper">
      <h2 className="title">Sign In</h2>
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
        <button type="submit" className="button">Sign In</button>
      </form>
      <p className="text">
        Create a new account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  </div>
  )
}

export default SignIn