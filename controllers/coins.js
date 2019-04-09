global.fetch = require('node-fetch')
const cc = require('cryptocompare')
const rp = require('request-promise');
cc.setApiKey(process.env.API_KEY)

const allrequestURL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=USD&api_key=31faf8a4e5414290f87f1bf5349e5397d66c66848a85a2ef8c7214a43bf39520'

function getAllCoins(req,res) {
  
  return fetch(allrequestURL)
    .then(res=> {
      if (res.ok) return res.json();
      
    })
    .then(data => {
     res.json(data.Data)
    });
}

function getOneCoin(req,res) {
  return fetch(`https://min-api.cryptocompare.com/data/histohour?fsym=${req.params.id}&tsym=USD&limit=240&aggregate=2&api_key=31faf8a4e5414290f87f1bf5349e5397d66c66848a85a2ef8c7214a43bf39520`)
    .then(res=> {
      if (res.ok) return res.json();
    })
    .then(data => {
     res.json(data.Data)
    });
}




module.exports = {
  getAllCoins,
  getOneCoin
}