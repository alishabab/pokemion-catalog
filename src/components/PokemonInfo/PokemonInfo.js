import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import classes from './PokemonInfo.module.css';

const abilities = [
  'Big Eyes',
  'Long Feet',
  'Fast',
];

const stats = [
  {
    name: "abc",
    base_stat: 50,
  },
  { 
    name: "abc",
    base_stat: 40,
  },
  {
    name: "abc",
    base_stat: 90,
  },
];

const PokemonInfo = ({ pokemon }) => {
  const history = useHistory();
  const goBackHandle = () => {
    history.goBack();
  };

  return (
    <div className={classes.PokemonInfo}>
      <div className={classes.PokemonImg}>
        <img src="https://pngimg.com/uploads/pokemon/pokemon_PNG149.png" alt="pokemon" />
      </div>
      <div className={classes.PokemonDetail}>
        <h2>Pokemon Name</h2>
        <p>Abilities</p>
        <ul>
          {abilities.map(ability => <li key={ability} className={classes.Ability}>{ability}</li>)}
        </ul>
        <p>Statistics</p>
        <ul>
          {stats.map(stat => <li key={stat.name} className={classes.Stat}>{stat.name}: {stat.base_stat}</li>)}
        </ul>
        <button type="button">Back</button>
      </div>
    </div>
  );
};

export default PokemonInfo;
