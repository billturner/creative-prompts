import initialTechniques from '../data/techniques';
import {
  GENERATE_NEW_PROMPT
} from '../actions/index';

const INITIAL_STATE = {
  all: initialTechniques,
  current: ''
};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case GENERATE_NEW_PROMPT:
      return {
        ...state,
        current: _.sample(state.all)
      }
      break;
    default:
      return state;
  }
}
