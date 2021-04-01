import { ADD_ENTRIES, CLEAR_ENTRIES } from './entries.types';
import formatEntry from '../../helpers/formatEntries';

const INITIAL_STATE = {
  entries: [],
};

const entriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ENTRIES:
      return {
        ...state, entries: [...formatEntry(action.entries.data.children)],
      };
    case CLEAR_ENTRIES:
      return {
        ...state, entries: [],
      };
    default: return state;
  }
};

export default entriesReducer;