import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/Navbar.js";
import NavbarShowCase from "../../components/NavbarShowCases"
import Divider from "../../components/Divider.js";

export default function Home() {
  return (
    <>
    <Navbar />
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={require('../../public/panorama.jpg')}
          alt="Panorama"
          layout="responsive" // Makes the image responsive
          width={1080} // Provide the width of your image
          height={640} // Provide the height of your image
        />
      </div>
      <div className={styles.textOverlay}>
          Welcome to Games Tomb
        </div>
        <Divider />
    <main className={styles.main}>
      <h1>News</h1>
      <div className={styles.showCaseContainer}>
        <NavbarShowCase
        src={require('../../public/CallofDuty_mock.jpg')}
        alt="showcase"
        text="News on the new Call of Duty"
         />
        <NavbarShowCase
        src={require('../../public/StarCraft2_mock.jpg')}
        alt="showcase"
        text="Where is Starcraft 2 after 12 years"
         />
         <NavbarShowCase
        src={require('../../public/Overwatch2_mock.jpg')}
        alt="showcase"
        text="The new season 9 of Overwatch 2"
         />
          <NavbarShowCase
        src={require('../../public/SeaofThieves_mock.png')}
        alt="showcase"
        text="What is comming from under the sea this season"
         />
      </div>
      <p>This is your new homepage. Start building your application here!</p>
    </main>
    </>
  );
}
