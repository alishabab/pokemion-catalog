import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

import { getPokemonsError, getPokemons, getPokemonsPending } from '../../reducers/pokemon';
import { getPokemonType } from '../../reducers/filter';
import Pokemon from '../../components/Pokemon/Pokemon';
import PokemonFilter from '../../components/PokemonFilter/PokemonFilter';
import classes from './PokemonList.module.css';

const pokemons = [
  {
    id: 1,
    image: 'https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png',
    name: 'picachu',
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png',
    name: 'picachu',
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png',
    name: 'picachu',
  },
  {
    id: 4,
    image: 'https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png',
    name: 'picachu',
  },
  {
    id: 5,
    image: 'https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png',
    name: 'picachu',
  },
  {
    id: 6,
    image: 'https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png',
    name: 'picachu',
  },
];

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
    return (
      <div className={classes.PokemonList}>
        { pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    );
  }
}

export default PokemonList;
