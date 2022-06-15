const leaderboardModel = require('../models/leaderboardModel');

// GET all entries
exports.leaderboard_all = async (req, res) => {
    try {
        let result = await leaderboardModel.find({}).exec();
        res.send(result);
    } catch (error) {
        res.json({"status":"error"})
    }
};

// GET all entries with pagination (0 indexed)
exports.leaderboard_bulk = async (req, res) => {
    try {
        let page = req.params.page;
        let result = await leaderboardModel.find({})
            .sort({ "points": -1})
            .skip(10 * page)
            .limit(10)
            .exec();
        console.log("bulk result", result);
        res.send(result);
    } catch (error) {
        res.json({"status":"error"})
    }
};

// POST add entry
exports.leaderboard_add = function(req, res) {
    let name = "test";
    let points = 3;
    let updated = Date.now();

    let newEntry = new leaderboardModel({name:name,points:points,updated:updated})

    newEntry.save(function (err) {
        if (err) return console.error(err);
        console.log("Document saved to collection");
        res.json(newEntry)
      });
};


