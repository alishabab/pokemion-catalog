import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
import { getPokemonsError, getPokemons, getPokemonPending } from '../../reducers/pokemon';
import { fetchPokemon } from '../../api/index';
import PokemonInfo from '../../components/PokemonInfo/PokemonInfo';
import classes from './PokemonCard.module.css';

const PokemonCard = ({ fetchPokemon, data }) => {
  const { error, pending, pokemons = [] } = data;

  const { name } = useParams();

  useEffect(() => {
    fetchPokemon(name); // eslint-disable-next-line
  }, []);

  if (error) {
    return (
      <div>
        {error}
      </div>
    );
  }
  if (pending) {
    return (
      <div className={classes.TextCenter}>
        <Spinner animation="border" />
      </div>
    );
  }
  if (pokemons.length === 1) {
    return <PokemonInfo pokemon={pokemons[0]} />;
  }

  return (
    <div className={classes.TextCenter}>
      <Spinner animation="border" />
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokemon,
}, dispatch);

const mapStateToProps = state => ({
  data: {
    error: getPokemonsError(state.data),
    pokemons: getPokemons(state.data),
    pending: getPokemonPending(state.data),
  },
});

PokemonCard.defaultProps = {
  data: {
    error: null,
    pending: true,
    pokemons: [],
  },
};

PokemonCard.propTypes = {
  data: PropTypes.shape({
    error: PropTypes.string,
    pending: PropTypes.bool,
    pokemons: PropTypes.arrayOf(PropTypes.object),
  }),
  fetchPokemon: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard);
