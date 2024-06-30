import React from 'react';
import "./Navbar.css"
import Button from './Button';

export default function Navbar(){
  return (
    <nav className="navbar">
        <div className="container">
            <ul className="nav-links">
            <li>
                <Button>Home</Button>
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
                <Button>Log In</Button>
        </div>
    </nav>
  )
}
