import React, { useEffect, useState } from 'react'
import { GetFibonacciValue } from '../service-caller/service-caller'

// Regular expression for input validation
const regex = /^-?[\d]{1,}$/

export function FibonacciIndexInput() {
    const [N, setN] = useState(0);
    const [isValid, validInput] = useState(true);

    // Event handlers
    const onChangeInput = e => {
        setN(e.target.value)
        validInput(regex.test(e.target.value))
    }

    const getFibonacci = e => {
        GetFibonacciValue(N)
        .then(value => alert(value))
        .catch(error => alert(error.message))     
    }

    return(
        <div>
            <label htmlFor="input">Input the index of the Fibonacci value to retrieve:</label>
            <input id="input" type="text" defaultValue={ N } onChange={ onChangeInput }/>
            <button onClick={ getFibonacci } disabled={ !isValid }>Ok</button>
        </div>
    );

}


