import React, { useState } from 'react';
import axios from "axios";
import "./signup.css"
import {Link, useNavigate } from 'react-router-dom';

function SignupBox() {
  const [signupData, setSignupData] = useState({});
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupData((prev) => {
      return{
      ...prev,
      [name]: value,}
    });
  };

  const handleSignUp = (event) => {
    event.preventDefault(); 

    
    if (signupData.password !== signupData.cnfPassword) {
      console.log("Passwords do not match");
      return;
    }

    axios.post("https://project-login-1.onrender.com/users/signup", signupData)
      .then((res) => {
        console.log('Signup successful:', res.data);
        navigate("/login")
      })
      .catch((err) => {
        console.log('Sign up failed', err);
      });
  };

  return (
    <div className="login-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            value={signupData.username || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mob">Mobile</label>
          <input
            type="number"
            name='mob'
            className="form-control"
            value={signupData.mob || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name='email'
            className="form-control"
            value={signupData.email || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={signupData.password || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cnfPassword">Confirm Password</label>
          <input
            type="password"
            name="cnfPassword"
            className="form-control"
            value={signupData.cnfPassword || ''}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-primary">Sign Up</button>
      </form>
      <p>Already registered? <Link to='/login'>Log in</Link></p>
    </div>
  );
}

export default SignupBox;
