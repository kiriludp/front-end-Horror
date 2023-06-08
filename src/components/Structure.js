
import {useState} from 'react';



export default function Structure({
    text, /*We are describing whassa going on */
    btnOne, /*One of our options */
    btnTwo, /*Second option */
    setOption, /*Will allow for different branches moving forward */
    idOne, /*Option ids */
    idTwo
}) {
    const [menuToggle, setMenuToggle] = useState(false);

    const handleMenuToggle = () => {
        setMenuToggle(!menuToggle);
    };
    return (
        <div className='Structure-container'>
            {menuToggle}
        <div className= "menu">
            <label className='Structure-menuBtn'>
                <input
                type="checkbox"
                checked={menuToggle}
                onChange={handleMenuToggle}
             />
             </label>
             </div>
        <div className="text">
          <p className="Structure-text"> {text} </p>
        </div>
{/*         <div className="Structure-options">
            <p>I am not sure what is going here yet</p>
        </div> */}

        <div className='Structure-buttons'>
            <button
            onClick={() => setOption(idOne)}
            className="Structure-btnOne"
            >
                {btnOne}
            </button>
            <button
            onClick={() => setOption(idTwo)}
            className="Structure-btnTwo"
            >
                {btnTwo}
            </button>
        </div>
    </div>

   );
}