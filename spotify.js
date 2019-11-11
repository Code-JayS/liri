var Spotify = require('node-spotify-api');
require("dotenv").config();
var key = require("./key");
var spotify = new Spotify(key.spotify);
var artists = [];
var SPOT = function () {

  this.findSong = function (term) {

    spotify.search({ type: 'track', query: term }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      for (let i = 0; i < data.tracks.items.length; i++) {
        var artist = data.tracks.items[i].album.artists[0].name;
        if (!artists.includes(artist)) {
          console.log(artist);
          console.log(data.tracks.items[i].name);
          console.log(data.tracks.items[i].preview_url);
          console.log(data.tracks.items[i].album.name);
          console.log(" ");
          artists.push(artist);
        }
      }
    });
  }
}


module.exports = SPOT;
