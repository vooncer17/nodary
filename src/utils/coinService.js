const BASE_URL = '/api/allcoins/';

export default {
  getAllCoins,
  getOneCoin
};

function getAllCoins() {
  return fetch(BASE_URL).then(res => {
    console.log('get all util running')
    return res.json()
  }).then(data => {
    // console.log('route ',data)
    console.log('i ran')
    return data;
  })
  }

function getOneCoin(id) {
  console.log(BASE_URL+id)
  return fetch(BASE_URL+id).then(res => {
    console.log('get one util running')
    return res.json()
  }).then(data => {
    return data
  })
}