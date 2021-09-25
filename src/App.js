import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Search from './components/Search';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import RandomQuote from './components/RandomQuote';
import RandomDeath from './components/RandomDeath';
import CharactersList from './components/CharactersList';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [randomDeath, setRandomDeath] = useState({});
  const [randomQuote, setRandomQuote] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showRandomQuote, setShowRandomQuote] = useState(false)
  const [showRandomDeath, setShowRandomDeath] = useState(false)
  const [query, setQuery] = useState('');
  
  useEffect(() => { 
    const fetchItems = async () => { 
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      const randomQuoteResult = await axios(`https://www.breakingbadapi.com/api/quote/random`);
      setCharacters( result.data);
      setRandomQuote( randomQuoteResult.data)
      setIsLoading(false);
    }
    fetchItems()
  },[query])

  const handleDeathClick = () => {
    const fetchDeath = async () => {
      const randomDeathResult = await axios(`https://www.breakingbadapi.com/api/random-death`);
      setRandomDeath( randomDeathResult.data);
      setShowRandomDeath(!showRandomDeath);
    };
    fetchDeath();
  };

  const handleQuoteClick = () => {
    const fetchQuote = async () => {
      const randomQuoteResult = await axios(`https://www.breakingbadapi.com/api/quote/random`);
      setRandomQuote( randomQuoteResult.data);
      setShowRandomQuote(!showRandomQuote);
    };
    fetchQuote();
  };
  
  return (
    <div className="App">
      <AppHeader />
      <div className="btns-container">
        <button className= "death-btn btn" onClick={handleDeathClick}
        >Random Death</button>
        <button className= "quote-btn btn" onClick={handleQuoteClick}
        >Random Quote</button>
      </div>
      {showRandomQuote && <RandomQuote randomQuote={randomQuote[0]} isLoading={isLoading}/>}
      {showRandomDeath && <RandomDeath randomDeath={randomDeath} isLoading={isLoading}/>}
      <Search getQuery={(inputWord) => setQuery(inputWord)} />
      <CharactersList isLoading={isLoading} characters={characters}/>
      <AppFooter />
    </div>
  );
}

export default App;
