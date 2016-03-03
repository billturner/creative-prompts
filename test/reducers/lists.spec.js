import { expect } from 'chai';

import listsReducer from '../../src/reducers/lists';
import initialLists from '../../src/data/lists';
import {
  CHOOSE_LIST,
  CLEAR_LIST
} from '../../src/actions/index';

describe('Reducers: lists', () => {
  const initialState = {
          all: initialLists,
          current: {},
          currentItems: []
        },
        fullState = {
          ...initialState,
          current: { id: 2, name: 'test list' },
          currentItems: [
            { id: 1, listId: 2, name: 'Item 1' },
            { id: 2, listId: 2, name: 'Item 2' }
          ]
        };

  it('returns the initial state', () => {
    expect(listsReducer(undefined, {})).to.deep.equal(initialState);
  });

  describe('CLEAR_LIST', () => {
    it('wipes out anything from current and currentItems', () => {
      const action = {
              type: CLEAR_LIST
            },
            nextState = listsReducer(
              fullState,
              action
            );

      expect(nextState.current).to.be.empty();
      expect(nextState.currentItems).to.be.empty();
    });
  });

  describe('CHOOSE_LIST', () => {
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

    it('fetches list items that belong to correct list', () => {
      const action = {
              type: CHOOSE_LIST,
              id: 2
            },
            nextState = listsReducer(
              initialState,
              action
            );

      expect(nextState.currentItems).to.not.be.empty();
      expect(nextState.currentItems.length).to.equal(100);
      expect(nextState.currentItems[0].listId).to.equal(2);
    });
  });
});
