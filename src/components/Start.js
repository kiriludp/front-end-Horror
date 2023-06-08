import { useState, useEffect} from 'react';
import Structure from "./Structure";
import texts from "../utils/texts";




export default function Start () {
    const [option, setOption] = useState(texts[0].id);

    useEffect (() => {
        window.scrollTo(0,0);
    }, [option]);

        const components = texts.map((text) => {

        return (
            
        <div className="text">
            <Structure
            key={text.id}
            text={text.text}
            btnOne={text.options[0].text}
            btnTwo= {text.options[1].text}
            setOption= {setOption}
            idOne={text.options[0].nextText}
            idTwo={text.options[1].nextText}
           /> 

        </div>
         );
    });
     return <div className="start-container">{components[option - 1]}</div>;
}