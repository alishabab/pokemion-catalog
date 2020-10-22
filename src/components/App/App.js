import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import PokemonList from '../../containers/PokemonList/PokemonList';
import PokemonCard from '../../containers/PokemonCard/PokemonCard';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={PokemonList} />
        <Route path="/pokemon/:name" component={PokemonCard} />
      </Switch>
    </Router>
  );
}

export default App;
