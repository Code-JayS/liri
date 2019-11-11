require("dotenv").config();
var BAND = require("./bands");
var OMDB = require("./omdb");
// var spotify = require("./spotify");
// var keys = require("./keys.js");
var bands = new BAND();
var omdb = new OMDB();
// var spotify = new Spotify(keys.spotify);
// Grab search command line argument
var search = process.argv[2];
// Joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join(" ");


if (search === "concert-this") {
    console.log("Searching for Shows");
    bands.inTown(term);
}
// else if (search === "spotify-this-song") {
//     console.log("Searching for music on spotify");
//     spotfiy.findsong(term);
// }
else if (search === "movie-this") {
    console.log("Searching for Movie");
    omdb.findMovie(term);
}
else {
    console.log('LIRI does not know this command');
}

// var pick = function (caseData, functionData) {
//     switch (caseData) {
//         case 'concert-this':
//             getBands();
//             break;
//         default:
//             console.log('LIRI does not know this command');
//     }
// }

// psuedoCode all the things this thing isnt even remotely complete//
