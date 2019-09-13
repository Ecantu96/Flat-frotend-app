// import 'isomorphic-fetch'
// import axios from 'axios';



// //const API_ROOT = process.env.REACT_APP_DEV;
// const API_ROOT = "https://nooklyn-flats-backend-apis.herokuapp.com";



// const LOGIN ='/users/authenticate';
// const REGISTER_USER = '/users/register';
// //const GET_USER_BYEMAIL = '/userByEmailId';

// //const GET_USER_BYID = '/user';

// // Fetches an API response and normalizes the result JSON according to schema.
// // This makes every API response have the same shape, regardless of how nested it was.
// function callApi(url, method, data) {
//   if(url === '/files'){
//     let formData = new FormData();
//       formData.append('file', data.file);
//       data = formData;
//   }

//   // if(url !== GET_INBOX_COMMUNICATIONS_PATH && url !== GET_INBOX_CONVERSATIONS_PATH){
//   //   url = API_ROOT + url
//   // }
//   url = (url.indexOf(API_ROOT) === -1) ? API_ROOT + url : url

//   return axios({
//     method,
//     url, 
//     data
//   })
//   .then(function ({data}) {
//     debugger;
//     if (data.error && data.error.errorMessage !== 'Email Id does not exist in repository') {
//       throw(data.error);
//     }
//     return data;
//   });
// }

// export const registerUser = (payload) => callApi(REGISTER_USER, 'post', payload);
// export const login = (payload) => callApi(LOGIN, 'post', payload);
// //export const getUserByEmail = (payload) => callApi(GET_USER_BYEMAIL+'?emailId='+payload, 'get');
// //export const getUserById = (payload) => callApi(GET_USER_BYID+'/'+payload, 'get');

import config from 'config';
import { authHeader } from '../_helpers';

export const userService = {
  login,
  logout,
  register,
  matchRoommates,
  MarkFavListings,
  MarkFavRoommates,
  propertyFilter,
  getAll,
  getById,
  UserUpdate,
  profileImageUploadandUpdate,
  coverImageUploadAndUpdate,
  SaveUpdateUserInterested,
  delete: _delete
};

const API_ROOT = "https://nooklyn-flats-backend-apis.herokuapp.com";
const LOGIN = '/users/authenticate';
const REGISTER = '/users/register';
const MATCHROOMMATES = '/users/matchRoommates';
const USERUPDATE = '/users/update';
const SAVEUPDATEUSERINTERESTED = '/SaveUpdateUserInterested';
const MARKFAVLISTING = '/MarkFavouriteProperty';
const MARKFAVROOMMATE = '/MarkfavouriteRoomate';
const PROFILEIMAGEUPLOAD = '/users/photoUpload';
const COVERIMAGEUPLOAD = '/users/CoverPhotoUpload';
const PROPERTYFILTER = '/filter';

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };
  return fetch(API_ROOT + LOGIN, requestOptions)
    .then(handleResponse)
    .then(user => {
        
      localStorage.setItem('user', JSON.stringify(user));
      
         return user;
    }).catch(error => {
      return Promise.reject(error);;

    });
  
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
  
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(API_ROOT + REGISTER, requestOptions)
    .then(handleResponse).then(user => {
       // store user details and jwt token in local storage to keep user logged in between page refreshes
      return user;
    }).catch(error => {
      return Promise.reject(error);;

    });
}
//Filter For Search Property
function propertyFilter(user){
  console.log("Request Body");
  const requestOptions = {
   method: 'GET',
   headers: {'Content-Type': 'application/json' },
   
};
  const fetch = window.fetch.bind(window);
     return fetch(API_ROOT + PROPERTYFILTER, requestOptions)
      .then(handleResponse).then(user => {
           return user;
    
      }).catch(error => {
        return Promise.reject(error);;

      });
      

}

function update(user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
}

function UserUpdate(user){
    const requestOptions = {
    method: 'PUT',  
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
    
  };
      return fetch(API_ROOT + USERUPDATE, requestOptions)
      .then(handleResponse).then(user => {
      
        return user;
    
      }).catch(error => {
        return Promise.reject(error);;

      });
}
//Function for Profile Image Upload And Update
function profileImageUploadandUpdate(user){
  
  console.log(user);
  const requestOptions = {
    method: 'POST',  
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: user
  };
  
    return fetch(API_ROOT + PROFILEIMAGEUPLOAD, requestOptions)
    .then(handleResponse).then(user => {
      return user;
    }).catch(error => {
      return Promise.reject(error);
    });
}


//Function for Cover Image Upload And Update
function coverImageUploadAndUpdate(user){
  
  console.log(user);
  const requestOptions = {
    method: 'POST',  
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: user
  };
  
    return fetch(API_ROOT + COVERIMAGEUPLOAD, requestOptions)
    .then(handleResponse).then(user => {
      return user;
    }).catch(error => {
      return Promise.reject(error);
    });
}

function SaveUpdateUserInterested(user){
   const requestOptions = {
    method: 'POST',  
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
     body: JSON.stringify(user)
   
 };
     return fetch(API_ROOT + SAVEUPDATEUSERINTERESTED, requestOptions)
     .then(handleResponse).then(user => {
     
       return user;
   
     }).catch(error => {
       return Promise.reject(error);;

     });

}

function MarkFavListings(user){
  const requestOptions = {
   method: 'POST',  
   headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  
};
 
   return fetch(API_ROOT + MARKFAVLISTING, requestOptions)
    .then(handleResponse).then(user => {
    
      return user;
  
    }).catch(error => {
      return Promise.reject(error);;

    });
}

function MarkFavRoommates(user){
  const requestOptions = {
   method: 'POST',  
   headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  
};
 
   return fetch(API_ROOT + MARKFAVROOMMATE, requestOptions)
    .then(handleResponse).then(user => {
    
      return user;
  
    }).catch(error => {
      return Promise.reject(error);;

    });


}

function matchRoommates(user){

	const requestOptions = {
		method: 'GET',  
		headers: authHeader()
		
	};
 
     return fetch(API_ROOT + MATCHROOMMATES, requestOptions)
      .then(handleResponse).then(user => {
      
        return user;
    
      }).catch(error => {
        return Promise.reject(error);;

      });

  
}
// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
   
    if (!response.ok) {
     
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

