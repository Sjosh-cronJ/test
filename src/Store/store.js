import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '../Reducer/reducers'
import sagas from '../Sagas'

const sagaMiddleware = createSagaMiddleware({});
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;