import axios from 'axios'

function getAllOrders(token) {
  let url = `https://ambar-core.herokuapp.com/orders?authorization=${token}`
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
  getAllOrders
};

export default userActions;