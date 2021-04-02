import { combineReducers } from 'redux';
import entriesReducer from './Entries/entries.reducer';

const rootReducer = combineReducers({
    entriesState: entriesReducer,
});

export default rootReducer;