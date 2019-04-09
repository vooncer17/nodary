const BASE_URL = '/api/allcoins/';


export default {
  getAllCoins,
};

function getAllCoins() {
  return fetch(BASE_URL).then(res => {
    console.log('hitting')
    return res.json()
  }).then(data => {
    console.log('route ',data)
    return data;
  })
  }