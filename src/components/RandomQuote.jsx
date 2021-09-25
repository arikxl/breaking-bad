import React from 'react';
import Loader from './Loader';

const RandomQuote = ({ randomQuote, isLoading }) => {
    return isLoading ? <Loader /> :
        <div className="random-quote-container">
            <h1>
                "{randomQuote.quote}"
            </h1>
            <h3>{randomQuote.author}</h3>
            {(randomQuote.series) === "Better Call Saul" && (
                <h3>From "{randomQuote.series}"</h3>
            )}
        </div>;
};

export default RandomQuote;