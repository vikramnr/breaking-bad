import React,{useState,useEffect} from "react";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid"
import "./App.css";

import axios from 'axios'
import Search from "./components/ui/Search";

const App = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setsearchQuery] = useState('')


  useEffect(() => {
    const fetchItems =  async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${searchQuery}`)
      setCharacters(result.data)
      setIsLoading(false)
    }
    fetchItems()
  },[searchQuery])

  const getQuery = (text) => {
    setsearchQuery(text)
  }

  return (
    <div className="container">
      <Header />
      <Search getQuery={getQuery}/>
      <CharacterGrid characters={characters} isLoading={isLoading}/>
    </div>
  );
};

export default App;
