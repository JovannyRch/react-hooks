import React, { useContext } from 'react'
import { userContext } from './UserContext';

export const LoginScreen = () => {
    const { user, setUser } = useContext(userContext);

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />
            <button onClick={() => { setUser({ id: 10, name: 'jovannyrch' }) }} className="btn btn-primary">Iniciar sesión</button>
        </div>
    )
}
