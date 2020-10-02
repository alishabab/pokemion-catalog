import {
  POKEMONS_PENDING,
  POKEMONS_SUCCESS,
  POKEMONS_ERROR,
  POKEMON_ERROR,
  POKEMON_PENDING,
  POKEMON_SUCCESS,
} from '../constants/index';

export const pokemonsReducer = (state = {}, action) => {
  switch (action.type) {
    case POKEMONS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case POKEMONS_SUCCESS:
      return {
        ...state,
        pending: false,
        pokemons: action.pokemons,
      };
    case POKEMONS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case POKEMON_PENDING:
      return {
        ...state,
        pendingPokemon: true,
      };
    case POKEMON_SUCCESS:
      return {
        ...state,
        pendingPokemon: false,
        pokemons: [action.pokemons],
      };
    case POKEMON_ERROR:
      return {
        ...state,
        pendingPokemon: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const getPokemons = state => state.pokemons;
const getPokemonsPending = state => state.pending;
const getPokemonPending = state => state.pendingPokemon;
const getPokemonsError = state => state.error;

export {
  getPokemons,
  getPokemonsPending,
  getPokemonPending,
  getPokemonsError,
};
