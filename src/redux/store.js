import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const persistConfig = { key: 'root', storage};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = createStore(
  persistedReducer, 
  composedEnhancer
);

export const persistor = persistStore(store);