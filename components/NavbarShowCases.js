import Image from 'next/image';
import './NavbarShowCase.css';
import Button from './Button';
import Link from 'next/link';

export default function NavbarShowCase({ imageSrc, title, text }) {
  return (
      <div className="centered-component">
        <img src={imageSrc} alt="Centered" className="centered-image" />
        <h1 className="centered-title">{title}</h1>
        <div className="article-text">{text}</div>
        <div className='button'>
          <Link href='./'><Button>Read More!</Button></Link>
        </div>
      </div>
    );
}
