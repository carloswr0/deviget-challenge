import * as types from './entries.types';
import makeRequest from '../../helpers/makeRequest';

export const addEntries = (entries) => {
  return {
    type: types.ADD_ENTRIES,
    entries,
  };
};

export const entriesFetchFailed = () => {
  return {
    type: types.FETCH_ENTRIES_FAILED,
  }
}

export const clearEntries = () => {
  return {
    type: types.CLEAR_ENTRIES,
  };
};

export const selectEntry = (entry) => {
  return {
    type: types.SELECT_ENTRY,
    entry
  };
};

export const unselectEntry = () => {
  return {
    type: types.UNSELECT_ENTRY,
  };
};


export const dismissEntry = (id) => {
  return {
    type: types.DISMISS_ENTRY,
    id
  };
};

export const fetchEntries = () => {
  const options = {
    method: "GET"
  }
  
  return dispatch => {
    makeRequest('top.json', options)
      .then(json => dispatch(addEntries(json)))
      .catch((err) => {
        dispatch(entriesFetchFailed())
        console.error(err)
      });
  }
}