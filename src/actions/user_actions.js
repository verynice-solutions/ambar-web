import axios from 'axios'

function signup(email, name, pass) {
  let url = 'https://ambar-core.herokuapp.com/authentication/registrations'
  return axios({
    url: url,
    method: 'post',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    data: {
      email: email,
      name: name,
      password: pass,
    }
  }).then(response => {
    return response.data
    // console.log(response)
  }).catch( error => {
    return error.response
    // console.log(error);
  });
}

function login(email, pass) {
  let url = 'https://ambar-core.herokuapp.com/authentication/logins'
  return axios({
    url: url,
    method: 'post',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    data: {
      email: email,
      password: pass,
    }
  }).then(response => {
    return response.data
    // console.log(response)
  }).catch( error => {
    return error.response
  });
}

const userActions = {
  signup,
  login
};

export default userActions;