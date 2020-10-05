import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

import { fetchPokemons } from '../../api/index';
import { getPokemonsError, getPokemons, getPokemonsPending } from '../../reducers/pokemon';
import { getPokemonType } from '../../reducers/filter';
import Pokemon from '../../components/Pokemon/Pokemon';
import PokemonFilter from '../../components/PokemonFilter/PokemonFilter';
import classes from './PokemonList.module.css';

class PokemonList extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    const { fetchPokemons } = this.props;
    fetchPokemons('normal');
  }

  handleFilterChange(e) {
    const { fetchPokemons } = this.props;
    if (e.target.value !== '') {
      fetchPokemons(e.target.value);
    }
    e.preventDefault();
  }

  render() {
    const { data, filter } = this.props;
    const { error, pending, pokemons } = data;
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

    if (pokemons.length < 2) {
      return (
        <div className={classes.TextCenter}>
          <Spinner animation="border" />
        </div>
      );
    }

    return (
      <div>
        <PokemonFilter onChange={this.handleFilterChange} category={filter} />
        <div className={classes.PokemonList}>
          { pokemons.map(pokemon => <Pokemon key={pokemon.name} pokemon={pokemon} />)}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokemons,
}, dispatch);

const mapStateToProps = state => ({
  data: {
    error: getPokemonsError(state.data),
    pokemons: getPokemons(state.data),
    pending: getPokemonsPending(state.data),
  },
  filter: getPokemonType(state.filter),
});

PokemonList.defaultProps = {
  data: {
    pending: true,
    error: null,
    pokemons: [],
  },
  filter: 'normal',
};

PokemonList.propTypes = {
  data: PropTypes.shape({
    pending: PropTypes.bool,
    error: PropTypes.string,
    pokemons: PropTypes.arrayOf(PropTypes.object),
  }),
  filter: PropTypes.string,
  fetchPokemons: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
