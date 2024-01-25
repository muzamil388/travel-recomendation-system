const csv = require('csv-parser');
const fs = require('fs');

const csvFilePath = __dirname+'/destination_new.csv';

// User preferences
// const preferences = {
//     adventure_rating: 4,
//     beach_rating: 3,
//     city_rating: 2,
//     snow_rating: 1,
//     budget: 20000
// };
// Create a read stream for the CSV file
const readStream = fs.createReadStream(csvFilePath);

const data = [];
readStream.pipe(csv())
  .on('data', (row) => {
    data.push(row);
  });

function recommend(preferences) {
  // Calculate the scores for each destination based on user preferences
  const scoredData = data.map((destination) => {
      let score = 0;
      score += parseInt(destination["adventure rating"]) * preferences.adventure_rating;
      score += parseInt(destination["beach rating"]) * preferences.beach_rating;
      score += parseInt(destination["city rating"]) * preferences.city_rating;
      score += parseInt(destination["snow rating"]) * preferences.snow_rating;
      score += (preferences.budget - parseInt(destination["recommended budget"])) / preferences.budget;
      console.log(score);
      destination.score = score;
      return destination;
  });
  
  // Sort the data based on scores
  const sortedData = scoredData.sort((a, b) => {
      return b.score - a.score;
  });
  
  // Print the sorted data
  return sortedData;
}

module.exports = recommend;
