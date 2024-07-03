"use client"
import Button from '../Button';
import { useState } from 'react';
import "./SignUp.css"


const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail]= useState('')

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // Here you can handle the login logic, for example, sending the credentials to the server
  //     console.log('Username:', username);
  //     console.log('Password:', password);
  //   };

  const onClickHandle = async () => {
    console.log('Username:', username);

    await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password ,email }),
    });
  }

  
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Sign Up</h2>
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
        <div className="form-group">
          <label htmlFor="password">Email:</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Button onClick={onClickHandle}>Sign Up</Button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
