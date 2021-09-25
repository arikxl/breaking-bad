import React from 'react';
import Loader from './Loader';


const RandomQuote = ({randomQuote, isLoading}) => {
    return isLoading ? <Loader /> :     
    <div>
        <h1>
            "{randomQuote.quote}"
        </h1>
        <h3>{randomQuote.author}</h3>
    </div>
}

export default RandomQuote;
