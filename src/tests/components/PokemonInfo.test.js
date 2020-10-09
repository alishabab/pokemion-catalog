import { mount } from 'enzyme';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PokemonInfo from '../../components/PokemonInfo/PokemonInfo';
import { DEFAULT_IMG } from '../../constants/index';

describe('itemDetailedView test', () => {
  let wrapper;
  const pokemon = {
    name: 'charizard',
    abilities: [
      {
        ability: {
          name: 'solar-power',
          url: 'https://pokeapi.co/api/v2/ability/94/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    sprites: {
      front_default: DEFAULT_IMG,
    },
    stats: [
      {
        base_stat: 100,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
  };

  beforeEach(() => {
    wrapper = mount(
      <Router>
        <PokemonInfo pokemon={pokemon} />
      </Router>,
    );
  });

  it('renders pokemon image', () => {
    expect(wrapper.find({ alt: pokemon.name })).toHaveLength(2);
  });

  it('renders pokemon abilities', () => {
    expect(wrapper.find('.Ability')).toHaveLength(1);
  });

  it('renders pokemon stats', () => {
    expect(wrapper.find('.Stat')).toHaveLength(1);
  });
});
