import React, { useState } from "react";

interface DailyQuoteProps {
  quotes: string[];
}

const Quotes = ({ quotes }: DailyQuoteProps) => {
  const items = new Array(60).fill(null).map((_, index) => "item " + index);
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const [quote, setQuote] = useState(quotes[0]);

  return (
    <>
      <h2 className="m-4 bg-amber-700 text-center py-5">{quote}</h2>

      <button
        className="btn btn-primary bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded m-4"
        onClick={() => setQuote(randomQuote)}
      >
        Click for Quote of the Day
      </button>
    </>
  );
};

export default Quotes;
