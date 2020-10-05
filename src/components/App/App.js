import React from 'react';
import Navbar from '../Navbar/Navbar';
import PokemonList from '../../containers/PokemonList/PokemonList';
import PokemonInfo from '../PokemonInfo/PokemonInfo';

function App() {
  return (
    <div>
      <Navbar />
      {/* <PokemonInfo /> */}
      <PokemonList />
    </div>
  );
}

export default App;
