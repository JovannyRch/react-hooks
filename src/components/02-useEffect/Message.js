import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coords, setCoords] = useState({
        x: 0,
        y: 0,
    });

    const listenCoords = (e) => {
        const coords = {
            x: e.x,
            y: e.y
        }
        console.log(":D");
        setCoords(coords);
    };


    const { x, y } = coords;
    useEffect(() => {
        window.addEventListener('mousemove', listenCoords);
        return () => {
            window.removeEventListener('mousemove', listenCoords);
        }
    }, []);

    return (
        <div>
            <h1>Message</h1>
            <p >
                x: {x}
                y: {y}
            </p>
        </div>
    )
}
