import { expect } from 'chai';

import techniquesReducer from '../../src/reducers/techniques';
import {
  GENERATE_NEW_PROMPT
} from '../../src/actions/index';
import initialTechniques from '../../src/data/techniques';

describe('Reducers: techniques', () => {
  const initialState = {
    all: initialTechniques,
    current: {},
    previous: []
  };

  it('returns the initial state', () => {
    expect(techniquesReducer(undefined, {})).to.deep.equal(initialState);
  });

  describe('GENERATE_NEW_PROMPT', () => {
    const action = {
      type: GENERATE_NEW_PROMPT
    };

    it('sets the current technique', () => {
      const nextState = techniquesReducer(
        initialState,
        action
      );

      expect(nextState.current).to.not.be.empty();
    });

    it('adds the current technique to the previous array', () => {
      const nextState = techniquesReducer(
              initialState,
              action
            ),
            currentTechnique = nextState.current;

      expect(nextState.previous).to.include(currentTechnique);
    });

    it('keeps only 5 techniques in previous array', () => {
      let nextState = techniquesReducer(initialState, action);
      nextState = techniquesReducer(nextState, action);
      nextState = techniquesReducer(nextState, action);
      nextState = techniquesReducer(nextState, action);
      nextState = techniquesReducer(nextState, action);
      nextState = techniquesReducer(nextState, action);
      nextState = techniquesReducer(nextState, action);

      expect(nextState.previous.length).to.equal(5);
    });
  });
});
