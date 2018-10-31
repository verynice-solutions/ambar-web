import axios from 'axios'

function getAllRankings(product_id) {
  let url = `https://ambar-core.herokuapp.com/products/${product_id}/rankings`
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

function createNewRanking(product_id, token) {
  let url = `https://ambar-core.herokuapp.com/products/${product_id}/rankings?authorization=${token}`
  return axios({
    url: url,
    method: 'post',
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