"use client"
import React from 'react';
import "./Navbar.css"
import Button from './Button';
import Link from 'next/link';
import { useState,useEffect } from 'react';

export default function Navbar(){
        const [username,setUsername]=useState("");
        useEffect(()=>{
        if(typeof window!=="undefined"){
                if(localStorage.getItem("username")===null)
                    {
                        console.log("nu exista nimic aici")
                    }    
                const auth = localStorage.getItem("auth");
                if(auth){
                const storedUserName = localStorage.getItem("username");
                setUsername(storedUserName);
                }
        }
        },[])

  return (
    <nav className="navbar">
        <div className="container">
            <ul className="nav-links">
            <li>
                <Link href="/">
                        <Button>Home</Button>
                </Link>
            </li>
            </ul>
        </div>
        <div>
                <Link href='/categories'><Button>Categorii</Button></Link>
                
        </div>
        <div>
                <Link href="/newreleases"><Button>New Releases</Button></Link>
        </div>
        <div>
                <Link href='/search'><Button>Search</Button></Link>
        </div>
        <div>   
                <Link href='/login'><Button>Log In</Button></Link>
        </div>
        { username &&(
                <div>
                        <Link href='/'><Button>{username}</Button></Link>
                </div>
        )}
    </nav>
  )
}
