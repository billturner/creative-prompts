import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

import subjectsReducer from './subjects';
import techniquesReducer from './techniques';
import listsReducer from './lists';

const reducers = combineReducers({
  subjects: subjectsReducer,
  techniques: techniquesReducer,
  lists: listsReducer,
  routing: routeReducer
});

export default reducers;
