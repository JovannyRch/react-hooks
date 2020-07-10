import { useState, useEffect, useRef } from 'react';

export const FetchHook = (baseUrl) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });

    const loadData = () => {

        fetch(baseUrl).then(resp => resp.json()).then(
            data => {
                if (isMounted.current) {
                    setState(
                        {
                            loading: false,
                            data,
                            error: null
                        }
                    );
                } else {
                    console.log("No se llamo el setState");
                }
            }
        ).catch(
            e => {
                setState(
                    {
                        loading: false,
                        data: null,
                        error: e
                    }
                );
            }
        )
    }
    useEffect(() => {

        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        setState(
            {
                loading: true,
                data: null,
                error: null
            }
        );
        loadData()

    }, [baseUrl]);

    return state;
}