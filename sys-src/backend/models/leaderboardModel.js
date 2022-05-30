//mongoose needed
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

//Schema for Ratings
let LeaderboardSchema = new Schema({
    name: String,
    points: Number,
    updated: Date
});


//Export model
module.exports = mongoose.model('Leaderboard', LeaderboardSchema);
