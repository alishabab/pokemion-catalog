import React from 'react';
import Navbar from '../Navbar/Navbar';
import PokemonList from '../../containers/PokemonList/PokemonList';
import PokemonInfo from '../PokemonInfo/PokemonInfo';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Navbar />
      <PokemonInfo />
      {/* <PokemonList /> */}
    </div>
  );
}

export default App;
