import React from 'react';
import classes from './PokemonFilter.module.css';

const PokemonFilter = () => {
  const categories = [
    'normal',
    'fire',
    'water',
    'grass',
    'electric',
    'ice',
    'fighting',
    'poison',
    'ground',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dark',
    'dragon',
    'steel',
    'fairy',
  ];

  return (
    <div className={classes.PokemonFilter}>
      <h4>Select Category: </h4>
      <select>
        <option value="">Select Category</option>
        {categories.map(type => <option key={type} value={type}>{type}</option>)}
      </select>
    </div>
  );
};

export default PokemonFilter;
