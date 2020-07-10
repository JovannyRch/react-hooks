import React from 'react'
import { FetchHook } from '../../hooks/FetchHook'
import './effects.css';
import { useCounter } from './../../hooks/CounterHook';

export const MultipleCustomHook = () => {
    const { state: counter, increment } = useCounter(1);
    const baseUrl = "https://www.breakingbadapi.com/api/";
    const query = `quotes/${counter}`;

    const { loading, data } = FetchHook(baseUrl + query);
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h4>Breakin Bad Quotes</h4>
            <hr />
            {
                loading ?
                    (
                        <div className="alert alert-warning text-center">
                            Loading...
                        </div>

                    )
                    :
                    (
                        <div>
                            <blockquote className="blockquote text-right">
                                <p className="mb-0">
                                    {quote}
                                </p>
                                <footer className="blockquote-footer">
                                    {author}
                                </footer>
                            </blockquote>
                            <div className="text-center">
                                <button onClick={() => increment(1)} className="btn btn-secondary">  Next Quote</button>
                            </div>
                        </div>
                    )
            }

        </div>
    )
}
