import * as ActionTypes from '../actions/types';
import {REGISTER_USER, LOGIN} from  '../actions/user';



let user = localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')):null;
//const initialState = user ? { loggedIn: true, user } : {};
const initialState = {
    
    fetching: user?false:true,
    message:'',
    user:user? user:{},
    success:false
};


export function appReducer(state = initialState, action) {
    const { type, payload,message } = action;
    switch (type) {
     
        case REGISTER_USER[ActionTypes.SUCCESS] :
        return {          
            ...state,fetching:false,success:payload.success
        }
        case LOGIN[ActionTypes.REQUEST]:
        return {
          fetching: true,
          user: {}
        };
        case LOGIN[ActionTypes.SUCCESS]:    return {          
            ...state,fetching:false,
            user:{...payload}
        }
        
        default:
        return {...state,message};
    }
}