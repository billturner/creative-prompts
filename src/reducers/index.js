import { combineReducers } from 'redux';

import subjectsReducer from './subjects';
import techniquesReducer from './techniques';

const rootReducer = combineReducers({
  subjects: subjectsReducer,
  techniques: techniquesReducer
});

export default rootReducer;
