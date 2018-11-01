import axios from 'axios'

function getAllComments(product_id) {
  let url = `https://ambar-core.herokuapp.com/items/comments?item_id=${product_id}`
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

function createNewComment(product_id, token, message) {
  let url = "https://ambar-core.herokuapp.com/items/comments"
  return axios({
    url: url,
    method: 'post',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    data: {
      authorization: token,
      message: message,
      item_id: product_id
    }
  }).then(response => {
    console.log(response.data)
    return response.data
  }).catch( error => {
    console.log(error);
    return error.response
  });
}

const userActions = {
  getAllComments,
  createNewComment
};

export default userActions;
