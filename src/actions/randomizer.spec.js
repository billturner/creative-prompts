import expect from 'expect';

import {
  GENERATE_NEW_PROMPT
} from './index';
import * as actions from './randomizer';

describe('Actions: randomizer', () => {
  it('should create an action for generating prompts', () => {
    const actual = actions.generateNewPrompt(),
          expected = {
            type: GENERATE_NEW_PROMPT
          };

    expect(actual).toEqual(expected);
  });
});
