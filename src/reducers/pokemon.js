import {
  POKEMONS_PENDING,
  POKEMONS_SUCCESS,
  POKEMONS_ERROR,
  POKEMON_ERROR,
  POKEMON_PENDING,
  POKEMON_SUCCESS,
} from '../actions/index';

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

export const getPokemons = state => state.pokemons;
export const getPokemonsPending = state => state.pending;
export const getPokemonPending = state => state.pendingPokemon;
export const getPokemonsError = state => state.error;
