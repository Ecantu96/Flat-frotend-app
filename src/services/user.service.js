import config from 'config';
import { authHeader } from '../_helpers';

export const userService = {
  login,
  logout,
  register,
  matchRoommates,
  getAll,
  getById,
  UserUpdate,
  delete: _delete
};

const API_ROOT = "https://nooklyn-flats-backend-apis.herokuapp.com";
const LOGIN = '/users/authenticate';
const REGISTER = '/users/register';
const MATCHROOMMATES = '/users/matchRoommates';
const USERUPDATE = '/users/update';

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

function update(user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
}

function UserUpdate(user){
   console.log("Seriver User Update response" +user);
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user)

  };
     //console.log('this is request body');
      console.log(requestOptions);
     return fetch(API_ROOT + USERUPDATE, requestOptions)
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
     console.log('this is request body');
      console.log(requestOptions);
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
    console.log('error data' + JSON.stringify(response))
    if (!response.ok) {
      console.log('error code' + response.status)
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
