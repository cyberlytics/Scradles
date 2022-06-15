
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
        winner: ''
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
