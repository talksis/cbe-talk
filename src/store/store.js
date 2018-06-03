import { createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers/rootReducer'

const initialState = {};

const middleware = [thunk, createLogger()];

//persist
const persistConfig = {
    key: 'root',
    storage,
}

export default createStore(persistReducer(persistConfig, rootReducer), initialState, applyMiddleware(...middleware));

