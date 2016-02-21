import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

import randomizerReducer from './randomizer';
import listsReducer from './lists';

const reducers = combineReducers({
  randomizer: randomizerReducer,
  lists: listsReducer,
  routing: routeReducer
});

export default reducers;
