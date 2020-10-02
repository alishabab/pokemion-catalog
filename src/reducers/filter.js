import { FILTER_TYPE } from '../constants/index';

export const filterType = (state = 'normal', action) => {
  switch (action.type) {
    case FILTER_TYPE:
      return action.category;
    default:
      return state;
  }
};

export const getPokemonType = category => category;
