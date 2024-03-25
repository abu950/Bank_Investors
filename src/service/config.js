

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { InvestorList, InvestorStatusUpdate } from './reducer/InvestorList';

const persistConfig = {
    key: 'root',
    storage: storage,

};



// const InvestReducer = persistReducer(persistConfig, InvestorList);

export const reducers = combineReducers({
    investorList: InvestorList, // assuming this is the persisted reducer for investor list
    investorStatusUpdate: InvestorStatusUpdate
})

export const store = createStore(reducers, undefined, applyMiddleware(thunk, logger));
// export const persister = persistStore(store);



