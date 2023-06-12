import { Link } from "react-router-dom";
import "../styles/GameStart.css";
import backgroundImg from '../styles/imgs/0-1.jpg';






export default function GameStart() {
    return (
        <div className="start-container " >
            <div className="storyIntro">
                <h3>You find yourself in a tent in the middle of the woods...</h3>
                <div className="storyTime">
                <p> You wake up out of a deep sleep with a start, a chill down your spine. You’re not sure what it was that woke you up, but whatever it was has left you unsettled. Sitting up in your sleeping bag, you look around to notice your friend missing from beside you.</p>
                    <br></br>
                    <br></br>
                    <p><i>‘They must have gotten up to use the bathroom…’</i></p>

                    <br></br>
                    <p>Your heart is pounding in your chest like you’ve been running. You tell yourself it must have been a nightmare, even though you can’t remember anything. It can’t be that uncommon to get nightmares out in the woods while camping right? It must happen to people all the time…
                </p>
                </div>
            </div>
            <div className="start">
                <Link className='Homepage-link' to='/game'>
                    Let the chase begin...
                </Link>
            </div>

        </div>

    )
}