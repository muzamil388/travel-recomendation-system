const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const recommend = require('./recommend'); //import the recommendation function from the recommend.js file

app.use(bodyParser.json()); //parse incoming JSON data

app.post('/recommend', (req, res) => {
  console.log(req.body);
  const userPreferences = req.body; //get the user preferences from the request body
  const recommendations = recommend(userPreferences); //call the recommendation function with the user preferences
  res.send(recommendations); //send the recommendations back to the client
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
