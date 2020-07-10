import React, { useReducer, useState, useEffect } from 'react'
import './styles.css';
import { todoReducer } from './todoReducer';
import { TodoComponent } from './TodoComponent';
import { TodoForm } from './TodoForm';




export const TodoApp = () => {
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    };
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (description) {
            const newTodo = {
                id: new Date().getTime(),
                desc: description,
                done: false,
            }
            const action = {
                type: 'add',
                payload: newTodo
            }
            dispatch(action);
            setDescription('');
        }
    }

    const [description, setDescription] = useState('');

    const handleDesc = ({ target }) => {
        setDescription(target.value);
    }
    const handleDelete = (id) => {
        const action = {
            type: 'delete',
            payload: id
        };
        dispatch(action);
    }
    const handleToogle = (todoId) => {
        dispatch({ type: 'edit', payload: todoId });
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);



    return (
        <div>
            <h1>Todo App ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-8">
                    <ul className="list-group list-group-flush" >
                        {
                            todos.map((todo, index) => (
                                <li
                                    className="list-group-item"
                                    onClick={() => {
                                        handleToogle(todo.id)
                                    }}
                                    key={todo.id}
                                >
                                    <TodoComponent
                                        index={index} {...todo}
                                        handleDelete={handleDelete}
                                    />
                                </li>)
                            )
                        }
                    </ul>
                </div>
                <div className="col-4">
                    <TodoForm handleSubmit={handleSubmit} description={description} handleDesc={handleDesc} />
                    <button className="btn btn-outline-danger" onClick={() => { dispatch({ type: 'reset' }) }}>Remove all</button>
                </div>
            </div>
        </div>
    )
}
