import { userConstants } from '../_constant';
let user = JSON.parse(localStorage.getItem('user'));
//console.log('user reducer'+JSON.stringify(user))
const initialState = user ? {loggedIn: true, user } : {};
//console.log('user initialState'+JSON.stringify(initialState))
export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
        
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
          return {};
    default:
      return state
  }
}
