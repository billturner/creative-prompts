import {
  CHOOSE_LIST,
  CLEAR_LIST
} from './index';

export function chooseList(id) {
  return {
    type: CHOOSE_LIST,
    id
  };
}

export function clearList() {
  return {
    type: CLEAR_LIST
  };
}
