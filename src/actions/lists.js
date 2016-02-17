import {
  CHOOSE_LIST
} from './index';

export function chooseList(id) {
  return {
    type: CHOOSE_LIST,
    id
  };
}
