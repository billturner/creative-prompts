import expect from 'expect';

import {
  CHOOSE_LIST,
  CLEAR_LIST
} from './index';

import * as actions from './lists';

describe('Actions: lists', () => {
  describe('chooseList', () => {
    it('creates an action for choosing lists', () => {
      const actual = actions.chooseList(1),
            expected = {
              type: CHOOSE_LIST,
              id: 1
            };

      expect(actual).toEqual(expected);
    });
  });

  describe('clearList', () => {
    it('creates an action for clearing lists', () => {
      const actual = actions.clearList(),
            expected = {
              type: CLEAR_LIST
            };

      expect(actual).toEqual(expected);
    });
  });
});
