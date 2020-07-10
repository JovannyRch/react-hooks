import React from 'react'

export const TodoForm = ({ handleSubmit, description, handleDesc }) => {



    return (
        <>
            <h3>Add todo</h3>
            <hr />
            <form className="form-group" onSubmit={handleSubmit} >
                <input
                    className="form-control"
                    name="description"
                    placeholder="Create an app..."
                    autoComplete="off"
                    value={description}
                    onChange={handleDesc}
                />
                <button className="btn btn-block btn-outline-primary mt-3">
                    Add
            </button>
            </form>
        </>
    )
}
