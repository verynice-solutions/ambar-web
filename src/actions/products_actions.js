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

function sendOrder(order) {
  let url = 'https://ambar-core.herokuapp.com/shopping_carts'
  return axios({
    url: url,
    method: 'post',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    data: order
  }).then(response => {
    return response.data
    // console.log(response)
  }).catch( error => {
    return error.response
    // console.log(error);
  });
}

function filterProducts(order, category) {
  let catParam = `&category=${category}`
  !category && (catParam = ``)
  let url = `https://ambar-core.herokuapp.com/products?order_by=${order}`+catParam
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
  getAllCategories,
  filterProducts,
  sendOrder
};

export default userActions;