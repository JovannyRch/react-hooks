import React, { useRef } from 'react'
import './../02-useEffect/effects.css';
export const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <br />
            <input
                ref={inputRef}
                className="form-control"
                plaholder="Ingrese su nombre"
            />
            <button
                onClick={handleClick}
                className="btn mt-4 btn-outline-primary">
                Focus
            </button>
        </div>
    )
}
