import { ADD_ENTRIES, CLEAR_ENTRIES } from './entries.types';

export const addEntries = () => {
    return {
        type: ADD_ENTRIES,
    };
};
export const clearEntries = () => {
    return {
       type: CLEAR_ENTRIES,
    };
};