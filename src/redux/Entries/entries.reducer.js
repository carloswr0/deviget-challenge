import { ADD_ENTRIES, CLEAR_ENTRIES } from './entries.types';

const INITIAL_STATE = {
  entries: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ENTRIES:
      return {
        ...state, entries: [
          {
            name: "demo"
          }
        ],
      };
    case CLEAR_ENTRIES:
      return {
        ...state, entries: [],
      };
    default: return state;
  }
};

export default reducer;