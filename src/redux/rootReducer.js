import { combineReducers } from 'redux';
import entriesReducer from './Entries/entries.reducer';

const rootReducer = combineReducers({
    entries: entriesReducer,
});

export default rootReducer;