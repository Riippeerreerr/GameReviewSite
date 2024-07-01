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
    </nav>
  )
}
