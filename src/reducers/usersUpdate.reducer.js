import { userConstants } from '../_constant';

export function UsersUpdate(state = {}, action) {
  
  switch (action.type) {
    case userConstants.USER_REQUEST:
      return { updating: true };
    case userConstants.USER_SUCCESS:
       // alert("success");
      return {};
    case userConstants.USER_FAILURE:
      return {};
      alert("fail");
    default:
      return state
  }
}