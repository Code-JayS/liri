var axios = require("axios");
// var fs = require("fs");
var moment = require("moment")

var BAND = function () {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider = "\r\n------------------------------------------------------------\n\n";

  // inTown takes in the name of a band and searches the bands in town 
  this.inTown = function (term) {
    var URL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp"

    axios.get(URL).then(function (response) {
      for (let i = 0; i < response.data.length; i++) {
        console.log("Venue: " + response.data[i].venue.name)
        console.log("Location: " + response.data[i].venue.city + " " + response.data[i].venue.country)
        var time = moment(response.data[i].datetime).format('LL');
        console.log("Time: " + time);
        console.log(" ");
      }
      //gave up on fs for now
      // Append bandData and the divider to log.txt, print bandData to the console
      // fs.appendFile("log.txt", bandData + divider, function (err) {
      // if (err) throw err;
      //     console.log(bandData);
      //   });
      // });
    });
  }
}

module.exports = BAND;
