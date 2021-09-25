import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import AppHeader from './components/AppHeader';
import CharactersList from './components/CharactersList';
import Search from './components/Search';
import RandomDeath from './components/RandomDeath';
import RandomQuote from './components/RandomQuote';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [randomDeath, setRandomDeath] = useState({});
  const [randomQuote, setRandomQuote] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  
  useEffect(() => { 
    const fetchItems = async () => { 
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      const randomDeathResult = await axios(`https://www.breakingbadapi.com/api/random-death`);
      const randomDeathQuote = await axios(`https://www.breakingbadapi.com/api/quote/random`);
      setCharacters( result.data);
      setRandomQuote( randomDeathQuote.data)
      setRandomDeath( randomDeathResult.data)
      setIsLoading(false);
    }
    fetchItems()
  },[query])
  
  return (
    <div className="App">
      <AppHeader />
      <div className="btns-container">
        <button className= "random-btn btn" >Random Death</button>
        <button className= "quote-btn btn">Random Quote</button>
      </div>
      <RandomQuote randomQuote={randomQuote[0]} isLoading={isLoading}/>
      <RandomDeath randomDeath={randomDeath} isLoading={isLoading}/>
      <Search getQuery={(inputWord) => setQuery(inputWord)} />
      <CharactersList isLoading={isLoading} characters={characters}/>
    </div>
  );
}

export default App;
