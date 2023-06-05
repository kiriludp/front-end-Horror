import { Link } from "react-router-dom";



export default function Homepage() {
    return (
        <div className="main">
        <div className="storyIntro">
            <h3>You find yourself in a tent in the middle of the woods...</h3>
            <p className= "storyDetails"> Here will be more details about the story woooo</p>
        </div>
        <div className="start">
            <Link className='Homepage-link' to = '/NewGame'>
                Begin your adventure...
            </Link>
        </div>
        
        </div>
        
)
}