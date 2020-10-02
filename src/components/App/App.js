import React from 'react';
import Navbar from '../Navbar/Navbar';
import PokemonList from '../PokemonList/PokemonList';
import PokemonFilter from '../PokemonFilter/PokemonFilter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PokemonFilter />
      <PokemonList />
    </div>
  );
}

export default App;
