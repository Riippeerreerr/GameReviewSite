import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/Navbar.js";
import NavbarShowCase from "../../components/NavbarShowCases"
import Divider from "../../components/Divider.js";
import Divider_grey from "../../components/categories/Divider_grey";

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
        imageSrc='./CallofDuty_mock.jpg'
        title="Call of Duty: Modern Warfare maps are heading to Call of Duty: Mobile"
        text="Call of Duty: Modern Warfare maps are making their way to Call of Duty Mobile Season 2: Day of Reckoning.Two 
        of Modern Warfare's maps will be making their way to the mobile version of the franchise when Day of Reckoning 
        arrives tomorrow, March 10. Shoot House, which first appeared in the 2019 game, will be available alongside 
        Shipment, which was initially included in 2007's Call of Duty 4: Modern Warfare, and was updated for the more 
        recent release. "
         />
         </div>
         <Divider_grey />
         <div className={styles.showCaseContainer}>
        <NavbarShowCase
        imageSrc='./StarCraft2.jpg'
        title="DeepMind’s StarCraft 2 AI is now better than 99.8 percent of all human players"
        text="DeepMind today announced a new milestone for its artificial intelligence agents trained to play the 
        Blizzard Entertainment game StarCraft II. The Google-owned AI lab’s more sophisticated software, still called 
        AlphaStar, is now grandmaster level in the real-time strategy game, capable of besting 99.8 percent of all human 
        players in competition. The findings are to be published in a research paper in the scientific journal Nature. Not 
        only that, but DeepMind says it also evened the playing field when testing the new and improved AlphaStar against 
        human opponents who opted into online competitions this past summer. For one, it trained AlphaStar to use all three 
        of the game’s playable races, adding to the complexity of the game at the upper echelons of pro play. It also 
        limited AlphaStar to only viewing the portion of the map a human would see and restricted the number of mouse 
        clicks it could register to 22 non-duplicated actions every five seconds of play, to align it with standard human
         movement."
         />
         </div>
         <Divider_grey />
         <div className={styles.showCaseContainer}>
         <NavbarShowCase
        imageSrc='./Overwatch2_mock.jpg'
        title="DIRECTOR'S TAKE: TALKING TANKS AND UPCOMING HERO BALANCE CHANGES"
        text="Hey everyone! It's been a bit since our last Director's Take. We’ve missed a few of these in recent months. 
        Sorry for the gap, speaking to all of you will continue to be a priority for the team. Let's talk about tanks. 
        Let me rephrase that… a lot of you are talking about tanks, I'd like to contribute from a developer point of view.
        We've heard from players that the tank role is in a tough spot right now and has been since Season 8 ended. 
        We agree. That's not to say that tanks were in a perfect spot before Season 9, but the problem now is that most of 
        them just don't feel as 'tanky' as they should. Many times, both Support heroes need to focus solely on the tank 
        just to keep them alive. In this scenario both the Tank and Supports can feel like they have limited options in 
        their gameplay, as they are essentially tied to each other."
         />
      </div>
      <Divider_grey />
      <div className={styles.showCaseContainer}>
        <NavbarShowCase
          imageSrc='./SeaofThieves.jpg'
          title="A LOOK BACK AT SEASON 12 COMMUNITY WEEKEND"
          text="Hello! It’s been a while since we’ve had one of these lookbacks, so just give us a second to dust off the 
          inkwell and make sure we didn’t leave any pineapple and Pondie sandwiches lurking under the pile of unsolved 
          bottle maps. All clear. There’s still a bit of a smell but we can’t spot anything… oh well! Right, Season 12 
          Community Weekend. From 11am UTC on June 15th to the same time on June 17th, we hosted the second Sea of Thieves 
          Community Weekend of 2024, but the first to welcome in our pirates on PlayStation®5! How did you all find it? 
          It’s no good talking, these are words typed a few days ago at least, they don’t have ears. Judging from the 
          responses and numbers we’ve seen, though, we’d say a lot of you had a right lovely time of it."
          />
      </div>
    </main>
    </>
  );
}
