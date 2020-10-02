import {
  getPokemonsPending,
  getPokemonsSuccess,
  getPokemonsError,
  getSinglePokemonError,
  getSinglePokemonPending,
  getSinglePokemonSuccess,
  changeType,
} from '../actions/index';

const baseUrl = 'https://pokeapi.co/api/v2';

const fetchData = url => {
  fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    }
    return res.status;
  })
    .catch(err => console.log(err));
};

const fetchPokemon = name => async dispatch => {
  dispatch(getSinglePokemonPending());
  try {
    const response = await fetchData(`${baseUrl}/pokemon/${name}`);
    const pokemon = {
      name: response.name,
      abilities: response.abilities,
      sprites: response.sprites,
      stats: response.stats,
    };
    dispatch(getSinglePokemonSuccess(pokemon));
    return pokemon;
  } catch (e) {
    dispatch(getSinglePokemonError(e));
    return e;
  }
};

const fetchPokemons = type => async dispatch => {
  dispatch(getPokemonsPending());
  try {
    const response = await fetchData(`${baseUrl}/type/${type}`);
    const pokemons = response.pokemon.map(async pok => {
      const res = await fetch(pok.pokemon.url);
      return res.json();
    });
    const pokemonsData = await Promise.all(pokemons);
    const payload = pokemonsData.map(data => ({
      name: data.name,
      image: data.sprites.front_default,
    }));
    dispatch(getPokemonsSuccess(payload));
    dispatch(changeType(type));
    return response;
  } catch (e) {
    dispatch(getPokemonsError(e));
    return e;
  }
};

export {
  fetchPokemon,
  fetchPokemons,
};
