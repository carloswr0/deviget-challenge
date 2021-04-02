import * as types from './entries.types';
import formatEntry from '../../helpers/formatEntries';

const ENTRIES_INITIAL_STATE = {
  entries: [],
  selectedEntry: {},
  fetched: false,
  fetchSuccess: false,
  fetchFailed: false,
};

const entriesReducer = (state = ENTRIES_INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_ENTRIES:
      return {
        ...state, 
        entries: [...formatEntry(action.entries.data.children)], 
        fetchSuccess: true,
        fetched: true,
        fetchFailed: false,
      };

    case types.FETCH_ENTRIES_FAILED:
      return {
        ...state, 
        fetchSuccess: false,
        fetched: true,
        fetchFailed: true,
      };
    
    case types.DISMISS_ENTRY: 
      return {
        ...state, entries: state.entries.filter(e => e.id !== action.id)
      };

    case types.SELECT_ENTRY:
      const selectedEntry = {...action.entry};
      selectedEntry.unread = false;
      const entries = [...state.entries].map(entry => {
        if (selectedEntry.id === entry.id) {
          entry = {...selectedEntry};
        }
        return entry;
      })
      return {
        ...state, selectedEntry, entries
      };
    
    case types.CLEAR_ENTRIES:
      return {
        ...state, entries: [],
      };

    default: return state;
  }
};

export default entriesReducer;