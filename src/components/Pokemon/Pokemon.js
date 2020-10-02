import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_IMG } from '../../constants/index';
import classes from './Pokemon.module.css';

const Pokemon = ({ pokemon }) => (
  <div className={classes.Pokemon}>
    <img src={pokemon.image ? pokemon.image : DEFAULT_IMG} alt={pokemon.name} />
    <p>{pokemon.name}</p>
  </div>
);

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
