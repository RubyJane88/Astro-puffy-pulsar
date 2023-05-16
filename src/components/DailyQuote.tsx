import React, {useState} from 'react';

interface DailyQuoteProps {
    quotes: string[];
}
const DailyQuote= ({quotes}: DailyQuoteProps) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const [quote, setQuote] = useState(quotes[0]);

    return (
        <>
     <h2>{quote}</h2>
            <button onClick={() => setQuote}>Quote for the day</button>
        </>
    );
};

export default DailyQuote;
