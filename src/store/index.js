import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers';
import appSaga from '../sagas';
import bootstrap from '../orm/bootstrap';
import { orm } from '../orm/model';
import { middleware as thunkMiddleware } from 'redux-saga-thunk';

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}
const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const createStoreWithMiddleware = applyMiddleware(...middlewares, thunkMiddleware, sagaMiddleware)(createStore);

const store = createStoreWithMiddleware(rootReducer, bootstrap(orm), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// run the saga
sagaMiddleware.run(appSaga)

export default store;