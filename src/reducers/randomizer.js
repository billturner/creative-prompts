import { filter, indexOf, sample } from 'lodash';

import {
  GENERATE_NEW_PROMPT
} from '../actions/index';

import allTechniques from '../data/techniques';
import rawSubjects from '../data/list-items';

const INITIAL_STATE = {
        currentSubject: {},
        currentTechnique: {},
        previousSubjects: [],
        previousTechniques: []
      },
      allSubjects = filter(rawSubjects, { listId: 99 });

function nextCleanSubject(previous) {
  let cleanSubject = sample(allSubjects);

  while (indexOf(previous, cleanSubject) !== -1) {
    cleanSubject = sample(allSubjects);
  }

  return cleanSubject;
}

function nextCleanTechnique(previous) {
  let cleanTechnique = sample(allTechniques);

  while (indexOf(previous, cleanTechnique) !== -1) {
    cleanTechnique = sample(allTechniques);
  }

  return cleanTechnique;
}
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GENERATE_NEW_PROMPT:
      const nextSubject = nextCleanSubject(state.previousSubjects),
            nextTechnique = nextCleanTechnique(state.previousTechniques);

      return {
        ...state,
        currentSubject: nextSubject,
        currentTechnique: nextTechnique,
        previousSubjects: state.previousSubjects.concat(nextSubject).slice(-5),
        previousTechniques: state.previousTechniques.concat(nextTechnique).slice(-5)
      };
    default:
      return state;
  }
}
