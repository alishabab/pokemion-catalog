import React from 'react';
import Navbar from '../Navbar/Navbar';
import PokemonList from '../../containers/PokemonList/PokemonList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PokemonList />
    </div>
  );
}

export default App;
