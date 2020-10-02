import React from 'react';
import PropTypes from 'prop-types';
import classes from './PokemonFilter.module.css';

const PokemonFilter = ({ onChange, category }) => {
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
      <select name="category" value={category} onChange={e => onChange(e)}>
        <option value="">Select Category</option>
        {categories.map(type => <option key={type} value={type}>{type}</option>)}
      </select>
    </div>
  );
};

PokemonFilter.defaultProps = {
  category: 'normal',
};

PokemonFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  category: PropTypes.string,
};

export default PokemonFilter;
