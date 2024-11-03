import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function LoginBox() {
        const [loginData, setloginData] = useState({
          email:'',
          password:''
        });
        const navigate = useNavigate()
  //   const dispatch = useDispatch();
 
  
    const handleLogin = (event) => {
      axios.post("https://project-login-1.onrender.com/users/login",loginData).then(res => {
        localStorage.setItem("token",res.data.token)
        console.log(res.data)
        navigate('/')
      }).catch(err =>{
        console.log(err)
      })
    };

    const handleChange=(e)=>{
      const {name,value} = e.target
         setloginData(prev => {
          return{
            ...prev,
            [name]:value,
          }
         })
  
    }
    return (
      <div className="login-container">
        <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="user-email">Email</label>
            <input
              type="email"
              id="user-email"
              name="email"
              className="form-control"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>

     
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-primary" onClick={handleLogin}>Login</button>
          <p>Not registered? <Link to='/signup'>Sign up</Link></p>
      </div>
    );
  }

export default LoginBox