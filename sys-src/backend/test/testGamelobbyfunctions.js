var assert = require('assert');
const gamelobbyfunctions = require("../game/gamelobbyfunctions");

describe('GameLobbyFunctions', () => {

    let game = {
        "id": "TestRoom",
        "inRound": false,
        "p1Choice": [],
        "p2Choice": [],
        "players": [
        {
            "creator": true,
            "player": "TestUser",
            "socket": "TestSocket",
        }
        ],
        "roundNumber": 0,
        "roundWinner": [],
        "started": false,
        "winner": ""
    }

    it('should create a new game', () => {
        assert.deepStrictEqual(gamelobbyfunctions.addGame('TestUser', 'TestSocket', 'TestRoom'),
                               game);
    });

    it('should join the created game', () => {
        // Push new player (that will join the game)
        game.players.push({
            player: 'TestJoinUser',
            socket: 'TestJoinSocket',
            creator: false,
        });

        assert.deepStrictEqual(gamelobbyfunctions.joinGame('TestRoom', 'TestJoinUser', 'TestJoinSocket'),
                               game);
    });

    it('should save the users selections', () => {
        // Push selection "Stein" to creating player (Player 1)
        game.p1Choice.push('Stein');

        assert.deepStrictEqual(gamelobbyfunctions.addSelection('TestSocket', 'TestRoom', 'Stein'),
                               [game, 1]);

        // Push selection "Schere" to joined player (Player 2)
        game.p2Choice.push('Schere');

        assert.deepStrictEqual(gamelobbyfunctions.addSelection('TestJoinSocket', 'TestRoom', 'Schere'),
                               [game, 2]);
    });

    it('should start the game and increase round number to 1', () => {
        game = gamelobbyfunctions.startGame('TestRoom');
        assert.equal(game.started, true);
        assert.equal(game.roundNumber, 1);
    });

    it('should add a round winner', () => {
        game.roundWinner.push('TestUser');
        assert.deepStrictEqual(gamelobbyfunctions.addRoundWinner('TestUser', 'TestRoom'),
                               game);
    });

    it('should increase round number', () => {
        game = gamelobbyfunctions.nextRound('TestRoom');
        assert.equal(game.roundNumber, 2);
    });

    it('should set game winner', () => {
        game = gamelobbyfunctions.setWinner('TestRoom', 'TestUser');
        assert.equal(game.winner, 'TestUser');
    });

    it('should remove joined player from the room', () => {
        // only creating user will stay in room
        game.players = [{
            "creator": true,
            "player": "TestUser",
            "socket": "TestSocket",
        }];

        assert.deepStrictEqual(gamelobbyfunctions.leaveGame('TestJoinSocket'), 
                               game);
        // fails because mocha version ??
    });

    /*it('should remove creating player from the room', () => {
        game.players = [];
        assert.deepStrictEqual(gamelobbyfunctions.leaveGame('TestSocket'), 
                               game);
    });*/
});