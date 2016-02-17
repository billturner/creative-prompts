import { expect } from 'chai';

import subjectsReducer from '../../src/reducers/subjects';
import {
  GENERATE_NEW_PROMPT
} from '../../src/actions/index';
import initialSubjects from '../../src/data/subjects';

describe('Reducers: subjects', () => {
  const initialState = {
    all: initialSubjects,
    current: {},
    previous: []
  };

  it('returns the initial state', () => {
    expect(subjectsReducer(undefined, {})).to.deep.equal(initialState);
  });

  describe('GENERATE_NEW_PROMPT', () => {
    const action = {
      type: GENERATE_NEW_PROMPT
    };

    it('sets the current subject', () => {
      const nextState = subjectsReducer(
        initialState,
        action
      );

      expect(nextState.current).to.not.be.empty();
    });

    it('adds the current subject to the previous array', () => {
      const nextState = subjectsReducer(
              initialState,
              action
            ),
            currentSubject = nextState.current;

      expect(nextState.previous).to.include(currentSubject);
    });

    it('keeps only 5 subjects in previous array', () => {
      let nextState = subjectsReducer(initialState, action);
      nextState = subjectsReducer(nextState, action);
      nextState = subjectsReducer(nextState, action);
      nextState = subjectsReducer(nextState, action);
      nextState = subjectsReducer(nextState, action);
      nextState = subjectsReducer(nextState, action);
      nextState = subjectsReducer(nextState, action);

      expect(nextState.previous.length).to.equal(5);
    });
  });
});
