import React from 'react'

export const TodoComponent = React.memo(
    ({ index, desc, done, id, handleDelete }) => {

        return (
            <>
                <p>
                    {index + 1}.- <span className={done ? 'complete' : ''}>{desc}</span>

                </p>
                <button onClick={() => handleDelete(id)} className="btn btn-danger">Eliminar</button>

            </>
        )
    }
);
