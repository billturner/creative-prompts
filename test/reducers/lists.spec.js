import { expect } from 'chai';

import listsReducer from '../../src/reducers/lists';
import initialLists from '../../src/data/lists';
import { CHOOSE_LIST } from '../../src/actions/index';

describe('Reducers: lists', () => {
  const initialState = {
    all: initialLists,
    current: {}
  };

  it('returns the initial state', () => {
    expect(listsReducer(undefined, {})).to.deep.equal(initialState);
  });

  describe('CHOOSE_LIST', () => {
    it('initializes with an empty chosen list', () => {
      const nextState = listsReducer(undefined, {});

      expect(nextState.current).to.be.empty();
    });

    it('sets the chosen list to current', () => {
      const action = {
              type: CHOOSE_LIST,
              id: 1
            },
            nextState = listsReducer(
              initialState,
              action
            );

      expect(nextState.current).to.not.be.empty();
      expect(nextState.current.id).to.equal(action.id);
    });
  });
});
