
import React from 'react';
import "../styles/MainGame.css"



export default function MainGame({
    text, /*We are describing whassa going on */
    btnOne, /*One of our options */
    btnTwo, /*Second option */
    setOption, /*Will allow for different branches moving forward */
    idOne, /*Option ids */
    idTwo
}) {

return (
    <div className="mainGame-container">
        <div className="mainGame-text">
            <p className="main-text"> {text} </p>
        </div>
        <div className="main-options">
            
        </div>

        <div className='main-buttons'>
            
            <button
                onClick={() => setOption(idOne)}
                
                className="main-btnOne"
            >
                {btnOne}
            </button>
            <button
                onClick={() => setOption(idTwo)}
                className="main-btnTwo"
            >
                {btnTwo}
            </button>
            
        </div>
    </div>


);
}