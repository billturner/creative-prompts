import _ from 'lodash';

import initialSubjects from '../data/subjects';

import {
  GENERATE_NEW_PROMPT
} from '../actions/index';

const INITIAL_STATE = {
  all: initialSubjects,
  current: {},
  previous: []
};

function nextCleanSubject(state) {
  let cleanSubject = _.sample(state.all);

  while (_.indexOf(state.previous, cleanSubject) !== -1) {
    cleanSubject = _.sample(state.all);
  }

  return cleanSubject;
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GENERATE_NEW_PROMPT:
      const nextSubject = nextCleanSubject(state);

      return {
        ...state,
        current: nextSubject,
        previous: state.previous.concat(nextSubject).slice(-5)
      };
    default:
      return state;
  }
}
