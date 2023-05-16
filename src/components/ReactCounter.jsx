
// src/components/ReactCounter.jsx
import React, { useState } from 'react';

function ReactCounter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1 className="text-3xl">React Counter</h1>
            <h1 className="text-2xl">Count: {count}</h1>
            <button
                className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={() => setCount(count + 1)}>Increment</button>
            <button
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default ReactCounter;
