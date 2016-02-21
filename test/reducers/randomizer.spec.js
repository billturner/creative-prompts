import { expect } from 'chai';

import randomizerReducer from '../../src/reducers/randomizer';
import {
  GENERATE_NEW_PROMPT
} from '../../src/actions/index';

describe('Reducers: randomizer', () => {
  const initialState = {
    currentSubject: {},
    currentTechnique: {},
    previousSubjects: [],
    previousTechniques: []
  };

  it('returns the initial state', () => {
    expect(randomizerReducer(undefined, {})).to.deep.equal(initialState);
  });

  describe('GENERATE_NEW_PROMPT', () => {
    const action = {
      type: GENERATE_NEW_PROMPT
    };

    it('sets the current subject', () => {
      const nextState = randomizerReducer(
        initialState,
        action
      );

      expect(nextState.currentSubject).to.not.be.empty();
    });

    it('adds the current subject to the previous array', () => {
      const nextState = randomizerReducer(
              initialState,
              action
            ),
            currentSubject = nextState.currentSubject;

      expect(nextState.previousSubjects).to.include(currentSubject);
    });

    it('sets the current technique', () => {
      const nextState = randomizerReducer(
        initialState,
        action
      );

      expect(nextState.currentTechnique).to.not.be.empty();
    });

    it('adds the current technique to the previous array', () => {
      const nextState = randomizerReducer(
              initialState,
              action
            ),
            currentTechnique = nextState.currentTechnique;

      expect(nextState.previousTechniques).to.include(currentTechnique);
    });

    it('keeps only 5 subjects in previous array', () => {
      let nextState = randomizerReducer(initialState, action);
      nextState = randomizerReducer(nextState, action);
      nextState = randomizerReducer(nextState, action);
      nextState = randomizerReducer(nextState, action);
      nextState = randomizerReducer(nextState, action);
      nextState = randomizerReducer(nextState, action);
      nextState = randomizerReducer(nextState, action);

      expect(nextState.previousSubjects.length).to.equal(5);
      expect(nextState.previousTechniques.length).to.equal(5);
    });
  });
});
