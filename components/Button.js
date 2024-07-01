"use client"
import React from "react";
import "./Button.css"
import { useState } from "react";

export default function Button({children, onClick}){
    const [benis,setbenis]=useState({})
    
    async function onClickHandler() {
        let res = await fetch("http://127.0.0.1:3001/api/characters", {
            method: "GET",
            cors: "no-cors"
        })

        let data = await res.json();

        console.log(data)
    }

    // useEffect(() => {
    //     onClickHandler
    // }, [])

    return(
        <button 
            className="button-navbar" 
            onClick={onClickHandler}> 
            {children}
        </button>
    )
}