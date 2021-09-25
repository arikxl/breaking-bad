import React from 'react';
import Loader from './Loader';

const RandomDeath = ({randomDeath, isLoading} ) => {
    return isLoading ? <Loader /> :     
    
        <div className="randomDeath-container">
                <div className="randomDeath-img-container">
                    <img src={randomDeath.img} alt="" />
                </div>
                <div className="randomDeath-info">
                    <h1>{randomDeath.death}</h1>
                    <ul>
                        <li>
                            <strong>Cause of Death: </strong>
                            {randomDeath.cause}
                        </li>
                        <li>
                            <strong>Responsible: </strong>
                            {randomDeath.responsible}
                        </li>
                        <li>
                            <strong>Last Words: </strong>
                            {randomDeath.last_words}
                        </li>
                    </ul>
                </div>
            </div>     
    
};

export default RandomDeath;
