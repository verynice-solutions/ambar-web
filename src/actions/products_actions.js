import axios from 'axios'

function getAll() {
  let url = 'https://ambar-core.herokuapp.com/products'
  return axios({
    url: url,
    method: 'get',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  }).then(response => {
    return response.data
  }).catch( error => {
    console.log(error);
    return error.response
  });
}

function getProduct(id) {
  let url = `https://ambar-core.herokuapp.com/products/${id}`
  return axios({
    url: url,
    method: 'get',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  }).then(response => {
    return response.data
  }).catch( error => {
    console.log(error);
    return error.response
  });
}

function getAllCategories() {
  let url = 'https://ambar-core.herokuapp.com/categories'
  return axios({
    url: url,
    method: 'get',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  }).then(response => {
    return response.data
  }).catch( error => {
    console.log(error);
    return error.response
  });
}

const userActions = {
  getAll,
  getProduct,
  getAllCategories
};

export default userActions;