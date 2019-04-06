const BASE_URL = '/api/datafeeds/';

export default {
  index,
  create
};

function index() {
  return fetch(BASE_URL).then(res => res.json());
}

function create(datafeed) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(datafeed)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

