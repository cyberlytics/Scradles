
let games = {}

exports.addGame = function (username, socketID, roomname) {
    let game = {
        id:      roomname,
        player1: username,
        socket1: socketID,
        player2: '',
        socket2: '',
        started: false,
        p1Choice: [],
        p2Choice: [],
        winner: ''
    }
    games[game.id] = game
    return game;
};

exports.joinGame = function joinGame(gameID, username, socketID){
    games[gameID].player2 = username
    games[gameID].socket2 = socketID
    games[gameID].started = true
    return games[gameID];
  }
