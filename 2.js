const axios = require('axios');

async function makeRequest() {

  let res = await axios.get('http://www.url.me');

  let data = res.data;
  console.log(data);
  localStorage.setItem('localCache', JSON.Stringify(data));
}

function fetch_catched() {
 return localStorage.getItem('localCache'); 
}

if ( !!fetch_catched() ) {
  makeRequest();
}	