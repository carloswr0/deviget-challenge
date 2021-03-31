import { ADD_ENTRIES, CLEAR_ENTRIES } from './entries.types';

export const addEntries = (entries) => {
  return {
    type: ADD_ENTRIES,
    entries,
  };
};

export const clearEntries = () => {
  return {
    type: CLEAR_ENTRIES,
  };
};

export const fetchEntries = () => {
  return dispatch => {
    fetch(`//api.reddit.com/top.json`)
    .then(req => req.json())
    .then(json => dispatch(addEntries(json)));
  }
}