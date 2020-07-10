import React from 'react'
import './effects.css'
import { FormHook } from '../../hooks/FormHook';
export const FormWithCustomHook = () => {

    const [formState, handleInputChange] = FormHook({
        name: '',
        password: '',
        email: '',
    });

    const { name, email, password } = formState;
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <>
            <h1>Use Effect</h1>
            <hr />
            <form className="form-group" onSubmit={handleSubmit} >
                <input
                    onChange={handleInputChange}
                    value={name}
                    placeholder="Ingresa tu nombre"
                    autoComplete="off"
                    name="name"
                    className="form-control mb-2 mb-2"
                />
                <input
                    onChange={handleInputChange}
                    value={email}
                    placeholder="Ingresa tu correo"
                    autoComplete="off"
                    name="email"
                    type="email"
                    className="form-control mb-2"
                />
                <input
                    onChange={handleInputChange}
                    value={password}
                    placeholder="Ingresa tu password"
                    name="password"
                    type="password"
                    className="form-control mb-2"
                />
                <button className="btn btn-primary">Ok</button>
            </form>

        </>
    )
}
