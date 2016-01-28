import _ from 'lodash';

import initialTechniques from '../data/techniques';
import {
  GENERATE_NEW_PROMPT
} from '../actions/index';

const INITIAL_STATE = {
  all: initialTechniques,
  current: {},
  previous: []
};

function nextCleanTechnique(state) {
  let cleanTechnique = _.sample(state.all);

  while (_.indexOf(state.previous, cleanTechnique) !== -1) {
    cleanTechnique = _.sample(state.all);
  }

  return cleanTechnique;
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GENERATE_NEW_PROMPT:
      const nextTechnique = nextCleanTechnique(state);

      return {
        ...state,
        current: nextTechnique,
        previous: state.previous.concat(nextTechnique).slice(-5)
      };
    default:
      return state;
  }
}
