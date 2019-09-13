import { userConstants } from '../_constant';
import { userService } from '../services';
import { alertActions } from './';
// import { history } from '../_helpers/history';
import { interestedRoommate } from '../components/login/LoginPage.js';

import history from '../_helpers/history';


export const userActions = {
    login,
    logout,
    register,
    userupdate,
    SaveUpdateUserInterest,
    matchRoommate,
    PropertyFilter,
    MarkFavListing,
    MarkFavRoommate,
    ProfileImageUploadAndUpdate,   
	getAll,
	delete: _delete
};

function login(username, password) {
	
    return dispatch => {
        dispatch(request({ username }));
        userService.login(username, password)
            .then(
                user => { 
				   					
                    
					dispatch(success(user));
					//dispatch(alertActions.success('Loggein in successfully'));
										
					//	history.push('/Listing')
					
                },
                error => {
                   
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
     userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
	//var interestedRoommate = document.getElementById("interestedRoommate").checked; 
	//alert(user.interestedRoommate);
	const interstedRoommate = user.interestedRoommate;
    return dispatch => {
        dispatch(request(user));
        userService.register(user)
            .then(
                user => { 
				
                    dispatch(success());
					//if(interstedRoommate){
                     //  history.push('/RoommateFinderResult');
					//}
                   // dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function matchRoommate(user) {
	
	    return dispatch => {
	     dispatch(request(user));
		//alert(user);
        userService.matchRoommates(user)
		
        .then(user => {
			    dispatch(alertActions.success(user));
			    dispatch(success());
                localStorage.removeItem("token")
			    return user;
				 
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
         
                                       
         );
            
	  //  }
    };

    function request(user) { return { type: userConstants.USER_REQUEST, user } }
    function success(user) { return { type: userConstants.USER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.USER_FAILURE, error } }
}


function MarkFavListing(user) {
	    return dispatch => {
	     dispatch(request(user));
		//alert(user);
        userService.MarkFavListings(user)
		
        .then(user => {
			    dispatch(alertActions.success(user));
			    dispatch(success());
                localStorage.removeItem("token")
			    return user;
				 
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
                                       
         );
     
    };

    function request(user) { return { type: userConstants.USER_REQUEST, user } }
    function success(user) { return { type: userConstants.USER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.USER_FAILURE, error } }
}

function MarkFavRoommate(user) {
	
	    return dispatch => {
	     dispatch(request(user));
		
        userService.MarkFavRoommates(user)
		
        .then(user => {
			    dispatch(alertActions.success(user));
			    dispatch(success());
                localStorage.removeItem("token")
			    return user;
				 
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
                                       
         );
     
    };

    function request(user) { return { type: userConstants.USER_REQUEST, user } }
    function success(user) { return { type: userConstants.USER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.USER_FAILURE, error } }
}

function PropertyFilter(user) {
	     //console.log(user);
	    return dispatch => {
	     dispatch(request(user));
    
           userService.propertyFilter(user)
		
        .then(user => {
			    dispatch(alertActions.success(user));
			    dispatch(success());
                localStorage.removeItem("token")
			    return user;
				 
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
                                       
         );
     
    };

    function request(user) { return { type: userConstants.USER_FILTER_PROPERTY_REQUEST, user } }
    function success(user) { return { type: userConstants.USER_FILTER_PROPERTY_SUCCESS, user } }
    function failure(error) { return { type: userConstants.USER_FILTER_PROPERTY_FAILURE, error } }
}

function userupdate(user) {
           return dispatch => {
           dispatch(request(user));
           userService.UserUpdate(user)
          .then(user => {
                   dispatch(alertActions.success(user));
                   dispatch(success());
                   localStorage.removeItem("token")
                   return user;
                  },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                }
         );
     
    };
    function request(user) { return { type: userConstants.USER_REQUEST, user } }
    function success(user) { return { type: userConstants.USER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.USER_FAILURE, error } }
}

function ProfileImageUploadAndUpdate(user) {
        return dispatch => {
        dispatch(request(user));
        userService.profileImageUploadandUpdate(user)
        .then(user => {
                dispatch(alertActions.success(user));
                dispatch(success());
                localStorage.removeItem("token")
                return user;
            },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
            }
        );

    };
    function request(user) { return { type: userConstants.USER_UPDATE_REQUEST, user } }
    function success(user) { return { type: userConstants.USER_UPDATE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.USER_UPDATE_FAILURE, error } }
}

function SaveUpdateUserInterest(user) {
     
       return dispatch => {
        dispatch(request(user));
       
       userService.SaveUpdateUserInterested(user)
       
       .then(user => {
               
                   dispatch(alertActions.success(user));
                  dispatch(success());
                localStorage.removeItem("token")
                return user;
                
               },
               error => {
                   dispatch(failure(error.toString()));
                   dispatch(alertActions.error(error.toString()));
               }
        
                                      
        );
           
     //  }
   };

   function request(user) { return { type: userConstants.USER_UPDATE_REQUEST, user } }
   function success(user) { return { type: userConstants.USER_UPDATE_SUCCESS, user } }
   function failure(error) { return { type: userConstants.USER_UPDATE_FAILURE, error } }
}


function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}