import { ADD_ENTRIES, CLEAR_ENTRIES } from './entries.types';

function formatEntry (entries) {
  const formattedEntries = [];
  entries.map(e => {
    const formattedEntry = {
      title: e.data.title,
      author: e.data.author,
      entry_date: e.data.created_utc,
      thumbnail_url: e.data.thumbnail,
      fullscreen_image_url: e.data.url,
      comments: e.data.num_comments,
      unread: true,
    }
    formattedEntries.push(formattedEntry);
  });
  return formattedEntries;
}

const INITIAL_STATE = {
  entries: [],
};

const reducer = (state = INITIAL_STATE, action) => {
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

export default reducer;