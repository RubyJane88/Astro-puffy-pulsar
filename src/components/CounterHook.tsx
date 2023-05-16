import { useState} from 'preact/hooks'
import React from 'react'

export default function CounterHook() {
    const [count, setCount] = useState(0)

    return (
        <>
         <h1>Count: {count}</h1>
         <button onClick={() => setCount(count +1)}>Increment</button>
         <button onClick={() => setCount(count -1)}>Decrement</button>
        </>
    )
}
