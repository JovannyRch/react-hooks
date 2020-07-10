import React, { useState } from 'react'
import './../02-useEffect/effects.css';
import { MultipleCustomHook } from "./../02-useEffect/MultipleCustomHook";

export const RealExample = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
    return (
        <div>
            <h1>Real Example </h1>
            <br />
            <button onClick={handleClick} className="btn btn-outline-success mb-5">Show/Hide</button>
            {
                show ?
                    (<MultipleCustomHook />) : (<div>Hidden</div>)
            }
        </div>
    )
}
