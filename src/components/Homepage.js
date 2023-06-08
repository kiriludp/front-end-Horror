import { Link } from "react-router-dom";
import "../styles/Homepage.css";



export default function Homepage() {
    return (
        <div className="main">
        <div className="storyIntro">
            <h3>You find yourself in a tent in the middle of the woods...</h3>

            <p className= "storyDetails"> You wake up out of a deep sleep with a start, a chill down your spine. You’re not sure what it was that woke you up, but whatever it was has left you unsettled. Sitting up in your sleeping bag, you look around to notice your friend missing from beside you. 
                <br></br>
            <i>‘They must have gotten up to use the bathroom…’</i>

            <br></br>
            Your heart is pounding in your chest like you’ve been running. You tell yourself it must have been a nightmare, even though you can’t remember anything. It can’t be that uncommon to get nightmares out in the woods while camping right? It must happen to people all the time… 
</p>
        </div>
        <div className="start">
            <Link className='Homepage-link' to = '/Start'>
                Begin your adventure...
            </Link>
        </div>
        
        </div>
        
)
}
