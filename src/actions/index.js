import {
  POKEMONS_PENDING,
  POKEMONS_SUCCESS,
  POKEMONS_ERROR,
  POKEMON_PENDING,
  POKEMON_SUCCESS,
  POKEMON_ERROR,
  FILTER_TYPE,
} from '../constants/index';

const getPokemonsPending = () => ({
  type: POKEMONS_PENDING,
});

const getPokemonsSuccess = data => ({
  type: POKEMONS_SUCCESS,
  pokemons: data,
});

const getPokemonsError = error => ({
  type: POKEMONS_ERROR,
  error,
});

const getSinglePokemonPending = () => ({
  type: POKEMON_PENDING,
});

const getSinglePokemonSuccess = pokemon => ({
  type: POKEMON_SUCCESS,
  pokemons: pokemon,
});

const getSinglePokemonError = error => ({
  type: POKEMON_ERROR,
  error,
});

const changeType = type => ({
  type: FILTER_TYPE,
  category: type,
});

export {
  getPokemonsPending,
  getPokemonsSuccess,
  getPokemonsError,
  getSinglePokemonError,
  getSinglePokemonPending,
  getSinglePokemonSuccess,
  changeType,
};
