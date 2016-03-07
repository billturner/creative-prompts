import expect from 'expect';

import listsReducer from './lists';
import initialLists from '../data/lists';
import {
  CHOOSE_LIST,
  CLEAR_LIST
} from '../actions/index';

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
    expect(listsReducer(undefined, {})).toEqual(initialState);
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

      expect(nextState.current).toEqual({});
      expect(nextState.currentItems).toEqual([]);
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

      expect(nextState.current).toExist();
      expect(nextState.current.id).toEqual(action.id);
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

      expect(nextState.currentItems).toExist();
      expect(nextState.currentItems.length).toEqual(100);
      expect(nextState.currentItems[0].listId).toEqual(2);
    });
  });
});
