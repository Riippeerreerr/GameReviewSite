import React from "react";
import "./Button.css"

export default function Button({children, onClick}){
    return(
        <button 
            className="button-navbar" 
            onClick={onClick}> 
            {children}
        </button>
    )
}