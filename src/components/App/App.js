import React from 'react';
import Navbar from '../Navbar/Navbar';
import PokemonList from '../../containers/PokemonList/PokemonList';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Navbar />
      <PokemonList />
    </div>
  );
}

export default App;
