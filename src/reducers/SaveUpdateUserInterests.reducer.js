import { userConstants } from '../_constant';

export function SaveUpdateUserInterests(state = {}, action) {
  
  switch (action.type) {
    case userConstants.USER_UPDATE_REQUEST:
      return { InterstedUpdating: true };
    case userConstants.USER_UPDATE_SUCCESS:
       // alert("success");
      return {};
    case userConstants.USER_UPDATE_FAILURE:
      return {};
      alert("fail");
    default:
      return state
  }
}