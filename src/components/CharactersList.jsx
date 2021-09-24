import React from 'react'
import Loader from './Loader';
import CharacterItem from './CharacterItem';

const CharactersList = ({isLoading, characters}) => {
    return isLoading ? <Loader /> : 
    <section className="cards">
        {characters.map(item =>  ( 
            <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
    </section>
}

export default CharactersList;
