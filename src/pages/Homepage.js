import '../styles/Homepage.css';
import { Link } from "react-router-dom";
import carImage from '../styles/imgs/car.png'
import campImage from '../styles/imgs/camp.png'


export default function Homepage() {

    return (
        <div className="homepage-container">
            <div className="title">
                <h1></h1>
            </div>
            <div className="mainText-textContainer">
            <p className="storySetup-textContainer">
                 An abandoned road...
                 <br></br>
                …an idyllic Cabin far off the well traveled path…
                <br></br>
                …A peaceful grove, perfect for a relaxing camping trip…
                <br></br>
                <br></br>
                But behind every picturesque moment…
                <br></br>
                behind each camera click to capture the memory
                <br></br>
                Lurks shadows of the past dragged from nightmares of the living
                <br></br>
                The man at the counter
                <br></br>
                The woman at the bus stop
                <br></br>
                The person filling your car with gas for the long trip
                <br></br>
                All say the same thing–
            </p>
            <p className="dialogue-textContainer">
                “You shouldn’t go out there”
                <br></br>
                “No one goes out there.”
                <br></br>
                “Not anymore..”
                <br></br>
                “Haven’t you heard the stories?”
                <br></br>
                “Don’t you know what happened?”
                <br></br>
                “There’s a history there…”
                <br></br>
                “A bloody history…”
            </p>
            <p className="warning-textContainer">
                Do you heed the warning?
                <br></br>
                <br></br>
                Or risk survival for a night of fun
            </p>
            
        </div>
        
        <div className="jigsaw">
                    The choice is yours...

                   </div>

                   <Link className='Homepage-link' to='/start'>
                    <img src={carImage}></img>
                </Link>
                <Link className='Homepage-link' to='/start'>
                <img src={campImage}></img>
                </Link>

                
                
        </div >
    );
}