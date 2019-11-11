var axios = require("axios");


var OMDB = function () {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider = "\n------------------------------------------------------------\n\n";

  this.findMovie = function (term) {
    // Then run a request with axios to the OMDB API with the movie specified
    var Url = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";

    axios.get(Url).then(
      function (response) {
        console.log(" ");
        console.log("Title: " + response.data.Title);
        divider
        console.log("Release Year: " + response.data.Year);
        console.log(response.data.Ratings[0].Source + " Score " + response.data.Ratings[0].Value);
        console.log(response.data.Ratings[1].Source + " Score " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        divider
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);

      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }
}
module.exports = OMDB;
