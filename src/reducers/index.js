import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

import subjectsReducer from './subjects';
import techniquesReducer from './techniques';

const reducers = combineReducers({
  subjects: subjectsReducer,
  techniques: techniquesReducer,
  routing: routeReducer
});

export default reducers;
