import Style from './Counter.module.css'
import React, {useState} from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    return(
        <div className={Style.container}>
            <h1>Counter: {number}</h1>
            <button onClick={() => setNumber(number + 1)}>Add</button>
            <button onClick={() => setNumber(number - 1)}>Decrease</button>
            <button onClick={() => setNumber(0)}>Reset</button>
        </div>
    );
}

export default Counter