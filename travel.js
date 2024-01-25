const axios = require('axios');

const API_KEY = 'YOUR_API_KEY';
const API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

const city = 'London';

axios.get(API_URL, {
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
  },
  params: {
    namePrefix: city,
    types: 'CITY'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
