import * as ActionTypes from './types';

export function createRequestTypes(base) {
    return [ActionTypes.REQUEST, ActionTypes.SUCCESS, ActionTypes.FAILURE].reduce((acc, type) => {
          acc[type] = `${base}_${type}`
          return acc
    }, {})
}

export function action(type, payload = {}) {

    return {
        type,
        ...payload,
        meta: {
            thunk: true
        }
    }
}

