const POKEMONS_PENDING = 'POKEMONS_PENDING';
const POKEMONS_SUCCESS = 'POKEMONS_SUCCESS';
const POKEMONS_ERROR = 'POKEMONS_ERROR';
const POKEMON_PENDING = 'POKEMON_PENDING';
const POKEMON_SUCCESS = 'POKEMON_SUCCESS';
const POKEMON_ERROR = 'POKEMON_ERROR';
const FILTER_TYPE = 'FILTER_TYPE';

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
  POKEMONS_PENDING,
  POKEMONS_SUCCESS,
  POKEMONS_ERROR,
  POKEMON_ERROR,
  POKEMON_PENDING,
  POKEMON_SUCCESS,
  FILTER_TYPE,
  getPokemonsPending,
  getPokemonsSuccess,
  getPokemonsError,
  getSinglePokemonError,
  getSinglePokemonPending,
  getSinglePokemonSuccess,
  changeType,
};
