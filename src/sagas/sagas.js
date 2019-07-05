import { call, put,  takeLatest } from 'redux-saga/effects'
// import { api } from '../services'
//import * as MessageActions from '../actions/messages'
// import history from '../helpers/history'
// import * as UserActions from '../actions/user'
// import {REQUEST, SUCCESS, FAILURE} from '../actions/types';

function* registerUser(action) {
    try {
        
        // const message = yield call(api.registerUser, action.payload);
        // yield put({
        //     type: UserActions.REGISTER_USER[SUCCESS],
        //     payload: message,
        //     meta:action.meta
        // });
        // history.push('/login');

            } catch (e) {
        // yield put({
        //     type: UserActions.REGISTER_USER[FAILURE],
        //     message: e.message,
        //     meta:action.meta
        // });
    }
}

function* login(action) {
    try {
        const message = yield call(api.login, action.payload);
        
        localStorage.setItem("user",JSON.stringify(message));
       
        yield put({
            type: UserActions.LOGIN[SUCCESS],
            payload: message
        });
       // yield put(push('/'));
        // history.push('/');
        
            } catch (e) {
        yield put({
            type: UserActions.LOGIN[FAILURE],
            message: e.message
        });
    }
}

/*
  Starts fetchUser on each dispatched `USER_REQUEST` action.

  takeLatest
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending,
  that pending fetch is cancelled
  and only the latest one will be run.
*/
function* appSaga() {
 
//    yield takeLatest(UserActions.REGISTER_USER[REQUEST], registerUser);
//    yield takeLatest(UserActions.LOGIN[REQUEST], login);

}

export default appSaga;
