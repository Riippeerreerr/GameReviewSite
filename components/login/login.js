"use client"
import './LoginForm.css';
import Button from '../Button';
import Link from 'next/link';
import { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // Here you can handle the login logic, for example, sending the credentials to the server
  //     console.log('Username:', username);
  //     console.log('Password:', password);
  //   };

  const onClickHandle = async () => {
    console.log('Username:', username);

    await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
  }

  return (
    <div className="login-container">
      <form className="login-form" >
        <h2>Login</h2>
        <Link href='/'>
          <Button>Home</Button>
        </Link>
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
          <Button onClick={onClickHandle}>Log In</Button>
        </div>
        <div>
          <Button >Sign Up</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
