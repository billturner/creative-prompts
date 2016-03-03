import { expect } from 'chai';

import {
  CHOOSE_LIST,
  CLEAR_LIST
} from '../../src/actions/index';

import * as actions from '../../src/actions/lists';

describe('Actions', () => {
  describe('chooseList', () => {
    it('creates an action for choosing lists', () => {
      const actual = actions.chooseList(1),
            expected = {
              type: CHOOSE_LIST,
              id: 1
            };

      expect(actual).to.deep.equal(expected);
    });
  });

  describe('clearList', () => {
    it('creates an action for clearing lists', () => {
      const actual = actions.clearList(),
            expected = {
              type: CLEAR_LIST
            };

      expect(actual).to.deep.equal(expected);
    });
  });
});
