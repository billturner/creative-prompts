import { expect } from 'chai';

import {
  GENERATE_NEW_PROMPT
} from '../../src/actions/index';
import * as actions from '../../src/actions/general';

describe('Actions: general', () => {
  it('should create an action for generating prompts', () => {
    const actual = actions.generateNewPrompt();
    const expected = {
      type: GENERATE_NEW_PROMPT
    };

    expect(actual).to.deep.equal(expected);
  });
});
