import { combineReducers } from 'redux';

import randomizerReducer from './randomizer';
import listsReducer from './lists';

const reducers = combineReducers({
  randomizer: randomizerReducer,
  lists: listsReducer
});

export default reducers;
