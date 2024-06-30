import React from 'react';
import "./Navbar.css"
import Button from './Button';
import Link from 'next/link';

export default function Navbar(){
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
                <Button>Categorii</Button>
        </div>
        <div>
                <Button>New Releases</Button>
        </div>
        <div>
                <Button>Search</Button>
        </div>
        <div>   
        <Link href='/login'>
                <Button>Log In</Button>
        </Link>
        
        </div>
    </nav>
  )
}
