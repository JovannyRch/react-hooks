import React, { useState } from 'react'
import { RouterApp } from './Router'
import { userContext } from './UserContext'

export const MainApp = () => {
    const [user, setUser] = useState({
        id: null,
        name: 'guest'
    });
    return (
        <userContext.Provider value={{
            user,
            setUser,
        }}>
            <RouterApp />
        </userContext.Provider>
    )
}
