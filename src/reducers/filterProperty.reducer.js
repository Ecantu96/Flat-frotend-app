import { userConstants } from '../_constant';

export function filterProperties(state = {}, action) {
  
  switch (action.type) {
    case userConstants.USER_FILTER_PROPERTY_REQUEST:
      return { registering: true };
    case userConstants.USER_FILTER_PROPERTY_SUCCESS:
       // alert("success");
      return {};
    case userConstants.USER_FILTER_PROPERTY_FAILURE:
      return {};
      alert("fail");
    default:
      return state
  }
}
