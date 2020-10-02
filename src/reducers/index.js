import { combineReducers } from 'redux';
import { pokemonsReducer } from './pokemon';
import { filterType } from './filter';

const rootReducer = combineReducers({
  data: pokemonsReducer,
  filter: filterType,
});

export default rootReducer;
