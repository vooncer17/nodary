import tokenService from './tokenService';
const BASE_URL = '/api/datafeeds/';

export default {
  getAllDataFeeds,
  create,
  subscribeToFeed,
  getOneDataFeed,
  deleteFeed
};

function getAllDataFeeds() {
  return fetch(BASE_URL).then(res => res.json());
}
function getOneDataFeed(userId) {
  return fetch(BASE_URL+userId).then(res => res.json());
}

function deleteFeed(feedId) {
  return fetch(BASE_URL+'delete/'+feedId)
}

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
  console.log('STRING ', postId)
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify({postId}),
  };
  return fetch('/api/datafeeds/subscribe/', options).then(res => res.text());
}


