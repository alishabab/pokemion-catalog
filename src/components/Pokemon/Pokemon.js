import React from 'react';
import PropTypes from 'prop-types';
import classes from './Pokemon.module.css';

const Pokemon = ({ pokemon }) => (
  <div className={classes.Pokemon}>
    <img src={pokemon.src} alt={pokemon.name} />
    <p>{pokemon.name}</p>
  </div>
);

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    src: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
