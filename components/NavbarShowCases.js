import Image from 'next/image';
import styles from './NavbarShowCase.css';

export default function NavbarShowCase({ src, alt, text }) {
  return (
    <div className={styles.showcasecontainer}>
      <Image
        className={styles.image}
        src={src}
        alt={alt}
        layout="compress" // Ensures the image fills the container
        objectFit="cover" // Ensures the image covers the entire container
      />
      <div className={styles.showcasetextOverlay}>
        {text}
      </div>
    </div>
  );
}
