var axios = require("axios");
var fs = require("fs");





// Create the TV constructor
var BAND = function () {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider = "\n------------------------------------------------------------\n\n";

  // inTown takes in the name of a band and searches the tvmaze API
  this.inTown = function (term) {
    var URL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp"

    axios.get(URL).then(function (response) {
      // Place the response.data into a variable, jsonData.
      // var jsonData = response.data;
      console.log(response.data)
      // bandData ends up being the string containing the band data we will print to the console
      // var bandData = [
      //   "band: " + jsonData.name,
      //   "Genre(s): " + jsonData.genres.join(", "),
      //   "Rating: " + jsonData.rating.average,
      //   "Network: " + jsonData.network.name,
      //   "Summary: " + jsonData.summary
      // ].join("\n\n");

      // Append bandData and the divider to log.txt, print bandData to the console
      // fs.appendFile("log.txt", bandData + divider, function (err) {
      //   if (err) throw err;
      //     console.log(bandData);
      //   });
      // });
    });
  }
}

  module.exports = BAND;
