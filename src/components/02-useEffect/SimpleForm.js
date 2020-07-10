import React, { useState, useEffect } from 'react'
import './effects.css'
import { Message } from './Message';
export const SimpleForm = () => {

    const [formState, setFormState] = useState(
        {
            name: '',
            email: '',
        }
    );

    const { name, email } = formState;

    useEffect(
        () => {
            console.log("Hey!");

        }, []
    );


    useEffect(
        () => {
            console.log("formState cambió!");

        }, [formState]
    );
    const handleInputChange = ({ target }) => {
        setFormState(
            {
                ...formState,
                [target.name]: target.value,
            }
        )
    };

    return (
        <>
            <h1>Use Effect</h1>
            <hr />
            <form className="form-group"  >
                <input
                    onChange={handleInputChange}
                    value={name}
                    placeholder="Ingresa tu nombre"
                    autoComplete="off"
                    name="name"
                    className="form-control"
                />
            </form>

            <form className="form-group"  >
                <input
                    onChange={handleInputChange}
                    value={email}
                    placeholder="Ingresa tu correo"
                    autoComplete="off"
                    name="email"
                    type="email"
                    className="form-control"
                />
            </form>

            {name === "123" && <Message />}

        </>
    )
}
