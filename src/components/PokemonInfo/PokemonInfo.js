import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { DEFAULT_IMG } from '../../constants/index';
import classes from './PokemonInfo.module.css';

const PokemonInfo = ({ pokemon }) => {
  const history = useHistory();
  const goBackHandle = () => {
    history.goBack();
  };
  return (
    <div className={classes.PokemonInfo}>
      <div className={classes.PokemonImg}>
        <img
          src={pokemon.sprites.front_default ? pokemon.sprites.front_default : DEFAULT_IMG}
          alt={pokemon.name}
        />
        <img
          src={pokemon.sprites.back_default ? pokemon.sprites.back_default : DEFAULT_IMG}
          alt={pokemon.name}
        />
      </div>
      <div className={classes.PokemonDetail}>
        <h2>{pokemon.name}</h2>
        <p>Abilities</p>
        <ul>
          {pokemon.abilities.map(item => (
            <li
              key={item.ability.name}
              className={classes.Ability}
            >
              {item.ability.name}
            </li>
          ))}
        </ul>
        <p>Statistics</p>
        <ul>
          {pokemon.stats.map(stats => (
            <li key={stats.stat.name} className={classes.Stat}>
              {stats.stat.name}
              :
              {' '}
              {stats.base_stat}
            </li>
          ))}
        </ul>
        <button type="button" onClick={goBackHandle}>Back</button>
      </div>
    </div>
  );
};

PokemonInfo.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    abilities: PropTypes.arrayOf(PropTypes.object),
    stats: PropTypes.arrayOf(PropTypes.object),
    sprites: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};

export default PokemonInfo;
