import { expect } from 'chai';

import {
  CHOOSE_LIST
} from '../../src/actions/index';
import * as actions from '../../src/actions/lists';

describe('Actions: chooseList', () => {
  it('should create an action for choosing lists', () => {
    const actual = actions.chooseList(1),
          expected = {
            type: CHOOSE_LIST,
            id: 1
          };

    expect(actual).to.deep.equal(expected);
  });
});
