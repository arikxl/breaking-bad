import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import AppHeader from './components/AppHeader';
import CharactersList from './components/CharactersList';
import Search from './components/Search';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => { 
    const fetchItems = async () => { 
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      const randomDeath = await axios(`https://www.breakingbadapi.com/api/random-death`);
      console.log( randomDeath.data)

      setCharacters( result.data);
      setIsLoading(false);
    }
    fetchItems()
  },[query])

  return (
    <div className="App">
      <AppHeader />
      <Search getQuery={(inputWord) => setQuery(inputWord)} />
      <CharactersList isLoading={isLoading} characters={characters}/>
    </div>
  );
}

export default App;
