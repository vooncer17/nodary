global.fetch = require('node-fetch')
const cc = require('cryptocompare')
const rp = require('request-promise');
cc.setApiKey(process.env.API_KEY)


const requestURL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=USD&api_key=31faf8a4e5414290f87f1bf5349e5397d66c66848a85a2ef8c7214a43bf39520'

function getAllCoins(req,res) {
  return fetch(requestURL)
    .then(res=> {
      if (res.ok) return res.json();
      
    })
    .then(data => {
     res.json(data.Data)
    });
}




module.exports = {
  getAllCoins
}