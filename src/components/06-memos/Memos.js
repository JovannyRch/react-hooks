import React, { useState } from 'react'
import { useCounter } from '../../hooks/CounterHook'
import './../02-useEffect/effects.css'
import { Small } from './Small';
export const Memos = () => {
    const { state: counter, increment } = useCounter(10);
    const [show, setShow] = useState(false)
    return (
        <div>
            <h1>Memorize <Small value={counter} /></h1>
            <hr />
            <button
                onClick={() => { increment(1) }}
                className="btn btn-primary"
            >
                +1
            </button>

            <button
                onClick={() => { setShow(!show) }}
                className="btn btn-info ml-3"
            >
                {JSON.stringify(show)}
            </button>
        </div>
    )
}
