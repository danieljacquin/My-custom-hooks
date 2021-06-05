import { useState } from 'react'


const useCounter = (initialState = 1) => {

    const [counter, setCounter] = useState(initialState);

    const increase = () => {
        setCounter(counter + 1);
    }

    const decrease = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initialState)
    }

    return {
        counter,
        increase,
        decrease,
        reset
    }
}

export default useCounter;