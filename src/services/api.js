import 'isomorphic-fetch'
import axios from 'axios';



//const API_ROOT = process.env.REACT_APP_DEV;
const API_ROOT = "https://nooklyn-flats-backend-apis.herokuapp.com";



const LOGIN ='/users/authenticate';
const REGISTER_USER = '/users/register';
//const GET_USER_BYEMAIL = '/userByEmailId';

//const GET_USER_BYID = '/user';

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(url, method, data) {
  if(url === '/files'){
    let formData = new FormData();
      formData.append('file', data.file);
      data = formData;
  }

  // if(url !== GET_INBOX_COMMUNICATIONS_PATH && url !== GET_INBOX_CONVERSATIONS_PATH){
  //   url = API_ROOT + url
  // }
  url = (url.indexOf(API_ROOT) === -1) ? API_ROOT + url : url
  
  return axios({
    method,
    url, 
    data
  })
  .then(function ({data}) {
    debugger;
    if (data.error && data.error.errorMessage !== 'Email Id does not exist in repository') {
      throw(data.error);
    }
    return data;
  });
}

export const registerUser = (payload) => callApi(REGISTER_USER, 'post', payload);
export const login = (payload) => callApi(LOGIN, 'post', payload);
//export const getUserByEmail = (payload) => callApi(GET_USER_BYEMAIL+'?emailId='+payload, 'get');
//export const getUserById = (payload) => callApi(GET_USER_BYID+'/'+payload, 'get');
