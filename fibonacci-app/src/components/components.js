import React, { useEffect, useState } from 'react'
import { GetFibonacciValue } from '../service-caller/service-caller'

export function FibonacciIndexInput() {
    const [N, setN] = useState(0);
    const getFibonacci = e => {
        GetFibonacciValue(N)
        .then(value => alert(value))
        .catch(error => alert(error.message))     
    }

    return(
        <div>
            <label htmlFor="input">Input the index of the Fibonacci value to retrieve:</label>
            <input id="input" type="text" defaultValue={ N } onChange={ e => setN(e.target.value) }/>
            <button onClick={ getFibonacci }>Ok</button>
        </div>
    );

}


