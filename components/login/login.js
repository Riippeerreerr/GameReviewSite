"use client"
import './LoginForm.css';
import Button from '../Button';
import { useState } from 'react';
import Link from 'next/link';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onClickHandle = async () => {
    console.log('Username:', username);

    let res=await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    let data=await res.json();
    if(data.status === 200) {
      localStorage.setItem("auth", true);
      localStorage.setItem("username", username);
      console.log(username)
      router.push('/');
  }
    else{
      console.error("Login failed",data.error)
    }
  
  }

  
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <Link href="/"><Button onClick={onClickHandle}>Log In</Button></Link>
          
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
