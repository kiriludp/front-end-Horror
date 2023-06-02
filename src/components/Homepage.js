

function Homepage() {
    return (
    <div>
        <div className="startContainer">
            <div className="card location">
                <div className="card-header">
                    <h2 className='localName'>You find yourself inside a tent in the middle of the woods.</h2>
                    <div className="storyBody">
                        <p>Here will be the story text :D </p>
                    </div>
                </div>
            </div>    
        </div>
        
        <div className="startContainer">
            <div className="card location">
                <div className="card-header">
                    <h2 className="localName">You are starting in the sitting room of an old cabin.</h2>
                    <div className="storyBody">
                        <p>Here is the story text of the other option</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Homepage
