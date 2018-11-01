import axios from 'axios'

function getAllRankings(product_id) {
  let url = `https://ambar-core.herokuapp.com/items/rankings?item_id=${product_id}`
  return axios({
    url: url,
    method: 'get',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  }).then(response => {
    console.log(response.data)
    return response.data
  }).catch( error => {
    console.log(error);
    return error.response
  });
}

function createNewRanking(product_id, token, score) {
  let url = `https://ambar-core.herokuapp.com/items/rankings`
  return axios({
    url: url,
    method: 'post',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    data: {
      authorization: token,
      score: score,
      item_id: product_id
    }
  }).then(response => {
    return response.data
  }).catch( error => {
    console.log(error);
    return error.response
  });
}

const userActions = {
  getAllRankings,
  createNewRanking
};

export default userActions;
