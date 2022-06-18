
let games = []

exports.addGame = function (username, socketID, roomname) {
    let game = {
        id: roomname,
        players: [{
            player: username,
            socket: socketID,
            creator: true,
        }],
        started: false,
        p1Choice: [],
        p2Choice: [],
        winner: '',
        roundWinner: [],
        roundNumber: 0,
        inRound: false
    }
    games.push(game);
    return game;
};

exports.joinGame = function joinGame(gameID, username, socketID) {
    let player = {
        player: username,
        socket: socketID,
        creator: false,
    }
    games.find(element => element.id == gameID).players.push(player);
    return games.find(element => element.id == gameID);
}

exports.leaveGame = function leaveGame(socketID) {
    let copyelement;
    let copyelement2;

    if (games.length == 0) {
        console.log("game length is 0")
        console.log(games)
        return undefined;
    }

    for(let element of games){
        console.log(element)
            for(let element2 of element.players){
                if (element2.socket.includes(socketID)) {
                    const index = element.players.indexOf(element2);
                    if (index == 0) {
                        console.log("creator verlässt raum")
                        copyelement = structuredClone(element);
                        games.splice(games.indexOf(element), 1)
                        // game wird aus dem komplettem array gelöscht wenn creator den raum verlässt
                        return copyelement;
                        }
                    else {
                        // ansonsten wird nur der player aus dem array players gelöscht
                        copyelement2 = structuredClone(element)
                        console.log("spieler 2 verlässt raum")
                        element.players.splice(index, 1)
                        return copyelement2;
                    }
                }
            };
        
    };
    console.log("spieler ist in keiner der räume")
    return undefined;
}

exports.addSelection = function addSelection(socket, roomName, selection){
    for(let game of games){
        if(game.id === roomName){
            let diff = game.p1Choice.length - game.p2Choice.length
            if(game.players[0].socket === socket){
                if(diff <= 0){
                    game.p1Choice.push(selection)
                }
            } else {
                if(diff >= 0){
                    game.p2Choice.push(selection)
                }
            }
            return game;
        }
    }
}

exports.addRoundWinner = function addRoundWinner(player, roomName){
    for(let game of games){
        if(game.id === roomName){
            game.roundWinner.push(player)
            return game;
        }
    }
}

exports.startGame = function startGame(roomName){
    for(let game of games){
        if(game.id === roomName){
            game.started = true;
            game.roundNumber += 1;
            return game;
        }
    }
}

exports.nextRound = function nextRound(roomName){
    for(let game of games){
        if(game.id === roomName){
            game.roundNumber += 1;
            return game;
        }
    }
}