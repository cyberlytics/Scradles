let express = require('express');
let router = express.Router();

let leaderboardController = require('../controllers/leaderboardController');

//Route to get all entries
router.get('/all', leaderboardController.leaderboard_all);

//Route to add new entry
router.get('/add',leaderboardController.leaderboard_add);

module.exports = router;
