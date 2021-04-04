import { createStore, applyMiddleware } from 'redux';

// reducers
import reducers from './reducers';

// sagas
import {watchCards} from './sagas';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchCards);

export default store;
