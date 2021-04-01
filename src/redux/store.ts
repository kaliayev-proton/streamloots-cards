import { createStore, applyMiddleware, combineReducers } from 'redux';

// reducers
import cards from './reducers/cards';

// sagas
import {watchCards} from './sagas';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({cards}),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchCards);

export default store;
