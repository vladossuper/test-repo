import { useState, useEffect } from 'react';

export const useDebounce = (value, timeout) => {
    const [state, setState] = useState(value);
    const [prevState, setPrevState] = useState('');

    console.log({ prevState });

    useEffect(() => {
        const handler = setTimeout(() => setState(prevState => {
            setPrevState(prevState);
            return value;
        }), timeout);
        return () => clearTimeout(handler);
    }, [value, timeout]);

    return {
        debounceSearch: state,
        prevDebounceSearch: prevState
    };
}