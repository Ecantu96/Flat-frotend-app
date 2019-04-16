import {fork,all} from 'redux-saga/effects';
import appSaga from './sagas';

export default function* rootSaga() {
  
    yield all([
        appSaga()
    ]);
}