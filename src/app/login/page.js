"use client";
import LoginForm from "../../../components/login/login"
import Navbar from "../../../components/Navbar"
import "./login.css"
import SignupForm from "../../../components/login/SignUp"
import Button from "../../../components/Button"
import { useState } from "react"

export default  function Login(){

    const [selectedLogin, setSelectedLogin] = useState(true);
    function handleSelect(selectedButton) {
        setSelectedLogin(selectedButton);
      }
      

    return(
        <>
        <Navbar />
        {!selectedLogin ? (
            <div className="login-center">
            <LoginForm />
            <Button onClick={()=>handleSelect(true)}>Sign Up</Button>
        </div>
        ) : null}
        {selectedLogin ? (
        <div className="signup-center">
            <Button onClick={()=>handleSelect(false)}>Log In</Button>
            <SignupForm />
        </div>
        ):null }
        </>
    )
}