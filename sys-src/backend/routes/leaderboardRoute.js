let express = require('express');
let router = express.Router();

let leaderboardController = require('../controllers/leaderboardController');

//Route to get all entries
router.get('/all', leaderboardController.leaderboard_all);

//Route to get entries with pagination
router.get('/bulk/:page', leaderboardController.leaderboard_bulk);

//Route to add new entry
router.get('/add',leaderboardController.leaderboard_add);

module.exports = router;
