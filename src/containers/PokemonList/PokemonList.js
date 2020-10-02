import React from 'react';
import classes from './PokemonList.module.css';

import Pokemon from '../../components/Pokemon/Pokemon';

const pokemons = [
  {
    id: 1,
    src: 'https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png',
    name: 'picachu',
  },
  {
    id: 2,
    src: 'https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png',
    name: 'picachu',
  },
  {
    id: 3,
    src: 'https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png',
    name: 'picachu',
  },
  {
    id: 4,
    src: 'https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png',
    name: 'picachu',
  },
  {
    id: 5,
    src: 'https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png',
    name: 'picachu',
  },
  {
    id: 6,
    src: 'https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png',
    name: 'picachu',
  },
];

const PokemonList = () => (
  <div className={classes.PokemonList}>
    { pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
  </div>
);

export default PokemonList;
