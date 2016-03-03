import _ from 'lodash';

import initialLists from '../data/lists';
import listItems from '../data/list-items';

import {
  CHOOSE_LIST,
  CLEAR_LIST
} from '../actions/index';

const INITIAL_STATE = {
  all: initialLists,
  current: {},
  currentItems: []
};

function getListItems(id) {
  return _.filter(listItems, { listId: id });
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHOOSE_LIST:
      return {
        ...state,
        current: _.find(state.all, { id: action.id }),
        currentItems: getListItems(action.id)
      };
    case CLEAR_LIST:
      return {
        ...state,
        current: {},
        currentItems: []
      };
    default:
      return state;
  }
}
