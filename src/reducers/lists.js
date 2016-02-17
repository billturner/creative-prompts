import _ from 'lodash';

import initialLists from '../data/lists';
import { CHOOSE_LIST } from '../actions/index';

const INITIAL_STATE = {
  all: initialLists,
  current: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHOOSE_LIST:
      return {
        ...state,
        current: _.find(state.all, { id: action.id })
      };
    default:
      return state;
  }
}
