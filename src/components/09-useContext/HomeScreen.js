import React, { useContext } from 'react'
import { userContext } from './UserContext';



export const HomeScreen = () => {

    const { user } = useContext(userContext);

    return (
        <div className="container">
            <h1>¡Hola! <b>{user.name}</b></h1>
            <hr />
            <pre >
                {JSON.stringify(user)}
            </pre>
        </div>
    )
}
