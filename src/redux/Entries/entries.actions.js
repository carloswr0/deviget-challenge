import { ADD_ENTRIES, CLEAR_ENTRIES } from './entries.types';
import makeRequest from '../../helpers/makeRequest';

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
  const options = {
    method: "GET"
  }
  
  return dispatch => {
    makeRequest('top.json', options).then(json => dispatch(addEntries(json)));
  }
}