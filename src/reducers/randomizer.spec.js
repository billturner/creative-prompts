import expect from 'expect';

import randomizerReducer from './randomizer';
import {
  GENERATE_NEW_PROMPT
} from '../actions/index';

describe('Reducers: randomizer', () => {
  const initialState = {
    currentSubject: {},
    currentTechnique: {},
    previousSubjects: [],
    previousTechniques: []
  };

  it('returns the initial state', () => {
    expect(randomizerReducer(undefined, {})).toEqual(initialState);
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

      expect(nextState.currentSubject).toExist();
    });

    it('adds the current subject to the previous array', () => {
      const nextState = randomizerReducer(
              initialState,
              action
            ),
            currentSubject = nextState.currentSubject;

      expect(nextState.previousSubjects).toInclude(currentSubject);
    });

    it('sets the current technique', () => {
      const nextState = randomizerReducer(
        initialState,
        action
      );

      expect(nextState.currentTechnique).toExist();
    });

    it('adds the current technique to the previous array', () => {
      const nextState = randomizerReducer(
              initialState,
              action
            ),
            currentTechnique = nextState.currentTechnique;

      expect(nextState.previousTechniques).toInclude(currentTechnique);
    });

    it('keeps only 5 subjects in previous array', () => {
      let nextState = randomizerReducer(initialState, action);
      nextState = randomizerReducer(nextState, action);
      nextState = randomizerReducer(nextState, action);
      nextState = randomizerReducer(nextState, action);
      nextState = randomizerReducer(nextState, action);
      nextState = randomizerReducer(nextState, action);
      nextState = randomizerReducer(nextState, action);

      expect(nextState.previousSubjects.length).toEqual(5);
      expect(nextState.previousTechniques.length).toEqual(5);
    });
  });
});
