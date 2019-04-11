import tokenService from './tokenService';
const BASE_URL = '/api/datafeeds/';

export default {
  getAllDataFeeds,
  create,
  subscribeToFeed
};

function getAllDataFeeds() {
  return fetch(BASE_URL).then(res => res.json());
}

// Haven't been able to test this. Based on code where a high score is created via playing mastermind
 

function create(datafeed) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(datafeed)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

function subscribeToFeed(postId) {
  console.log(JSON.stringify(postId))
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: postId
  };

  return fetch('/api/datafeeds/subscribe/'+postId, options).then(res => res.json());
}


