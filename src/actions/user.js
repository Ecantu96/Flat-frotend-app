import * as ActionTypes from './types';
import {createRequestTypes, action} from './util';

export const LOGIN = createRequestTypes(ActionTypes.LOGIN)
export const REGISTER_USER = createRequestTypes(ActionTypes.REGISTER_USER)

export const login = {
    request: (payload) => action(LOGIN[ActionTypes.REQUEST], payload),
    success: (message, response) => action(LOGIN[ActionTypes.SUCCESS], {message, response}),
    failure: (message, error) => action(LOGIN[ActionTypes.FAILURE], {message, error}),
}
export const register_user = {
    request: (payload) => action(REGISTER_USER[ActionTypes.REQUEST], payload),
    success: (message, response) => action(REGISTER_USER[ActionTypes.SUCCESS], {message, response}),
    failure: (message, error) => action(REGISTER_USER[ActionTypes.FAILURE], {message, error}),
}


