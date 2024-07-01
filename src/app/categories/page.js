import Navbar from "../../../components/Navbar"
import Category from "../../../components/categories/category"
import Divider_grey from "../../../components/categories/Divider_grey"
import Button from "../../../components/Button"
import './categories-page.css'

async function getHello() {
    const data = await fetch("http://localhost:3000/api/getgames");
    if (!data.ok) {
        throw new Error("Failed to fetch");
    }

    return data.json();
}


export default async function Categories() {

    const data = await getHello();

    console.log(data);
    return (
        <>
            <Navbar />
            <Divider_grey />
            <div>
                <Category
                    imageSrc='./static/images/rts_example.png'
                    title="RTS"
                    description={data.message}
                />
            </div>
            <Divider_grey />
            <div>
                <Category
                    imageSrc='./static/images/mmorpg.jpeg'
                    title="MMORPG"
                    description="Massively Multiplayer Online Role-Playing Games (MMORPGs) transport players into expansive 
                virtual worlds where epic adventures await. Embark on quests, forge alliances, and engage in dynamic 
                battles with players from around the globe. From mastering intricate skill systems to customizing your 
                character's appearance and abilities, MMORPGs offer unparalleled freedom and immersion. Whether exploring 
                fantastical realms or futuristic landscapes, players shape their destinies through persistent progression,
                 social interactions, and strategic gameplay. Dive into a living, breathing universe where every encounter 
                 and decision unfolds a unique narrative, making MMORPGs a boundless playground for exploration and heroism."
                />
            </div>
            <Divider_grey />
            <div>
                <Category
                    imageSrc='./static/images/moba.jpeg'
                    title="MOBA"
                    description="Multiplayer Online Battle Arena (MOBA) games thrust players into intense, strategic showdowns 
                where teamwork and skill determine victory. Choose from a diverse roster of heroes, each with unique abilities 
                and roles, and collaborate with teammates to outsmart and outmaneuver opponents. MOBAs blend fast-paced action 
                with strategic depth, requiring precise timing, tactical positioning, and coordinated efforts to dominate the 
                battlefield. From securing objectives to pushing lanes and executing decisive team fights, every match unfolds 
                with dynamic challenges and opportunities for mastery. Whether you're a seasoned strategist or new to the genre, 
                MOBAs deliver thrilling competition and strategic depth that keep players engaged in adrenaline-fueled battles 
                for supremacy."
                />
            </div>
            <Divider_grey />
            <div>
                <Category
                    imageSrc='./static/images/shooter.jpeg'
                    title="Shooter"
                    description="Shooter games immerse players in high-octane action where skill, precision, and reflexes are 
                paramount. Whether in realistic military settings or futuristic worlds, players wield a variety of firearms
                 and explosives to engage in fast-paced combat against opponents. From tactical maneuvers and strategic 
                 positioning to quick decision-making under fire, shooter games offer intense, adrenaline-pumping 
                 experiences. Whether playing solo or in multiplayer modes, each encounter challenges players to hone 
                 their aiming skills, adapt to changing environments, and leverage a wide array of weapons and gadgets. 
                 Shooter games provide a thrilling blend of competition, strategy, and exhilarating gameplay that keeps 
                 players on the edge of their seats in every firefight."
                />
            </div>
            <Divider_grey />
            <div>
                <Category
                    imageSrc='./static/images/mk.jpeg'
                    title="Fighting"
                    description="Fighting games deliver heart-pounding, one-on-one combat where players face off in skillful, 
                fast-paced battles. Choose from a diverse roster of characters, each with unique fighting styles, special 
                moves, and combos. Mastering these techniques, from precise timing to intricate combinations, is key to 
                dominating opponents. Whether battling in vibrant arenas or against formidable foes, fighting games 
                emphasize strategy, reflexes, and adaptability. Players engage in epic duels, executing powerful 
                attacks and defenses while anticipating their opponent’s next move. With a blend of intense competition 
                and technical mastery, fighting games offer a thrilling experience where every punch, kick, and block 
                can turn the tide of battle."
                />
            </div>
            <Divider_grey />
            <div>
                <Category
                    imageSrc='./static/images/simulation.jpeg'
                    title="Simulation"
                    description="Simulation games immerse players in detailed, realistic worlds where they can experience 
                activities and scenarios mirroring real life. From managing cities, farms, and businesses to piloting 
                aircraft, driving vehicles, and even living out virtual lives, simulation games offer a vast array of 
                experiences. Players make strategic decisions, manage resources, and interact with dynamic systems to 
                achieve their goals. With a focus on realism and attention to detail, these games provide educational 
                and engaging experiences, allowing players to experiment, build, and explore in ways that mirror the 
                complexities of the real world. Whether constructing intricate cities, nurturing ecosystems, or 
                simulating everyday tasks, simulation games offer a captivating and immersive escape into meticulously 
                crafted virtual environments."
                />
            </div>
            <div className="show-more">
                <Button> Show more!</Button>
            </div>
        </>
    )
}