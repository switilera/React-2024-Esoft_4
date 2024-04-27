import React, {useEffect, useState} from 'react';

const CountdownTimer = () => {
    const [counter, setCounter] = useState(10)

    const timer = () => setTimeout(() => {
        setCounter(counter - 1)
    }, 1000)

    useEffect(() => {
        counter > 0 ? timer() : clearTimeout(timer())
    }, [counter])

    return (
        <div>
            {`Counter: ${counter}`}
        </div>
    );
};

export default CountdownTimer;
