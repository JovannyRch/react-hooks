import React from 'react'
import { CounterHook } from '../../hooks/CounterHook'

export const CounterWithCustomHook = () => {
    const { state, increment, decrement, reset } = CounterHook(10);
    return (
        <div>
            <h1>Counter With Custom Hook {state}</h1>
            <button className="btn btn-success" onClick={() => increment(10)}>Add</button>
            <button className="btn btn-warning" onClick={reset}>Reset</button>
            <button className="btn btn-danger" onClick={() => decrement(10)}>Decrement</button>
        </div>
    )
}
