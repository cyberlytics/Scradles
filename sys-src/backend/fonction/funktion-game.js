


var player1 = {
  name: "null",
  Match_gewonnen: 0,
  Match_verloren: 0,
  Runde_gewonnen: 0,
  Runde_verloren: 0,
  thismatch: 0,

};
var player2 = {
  name: "null",
  Match_gewonnen: 0,
  Match_verloren: 0,
  Runde_gewonnen: 0,
  Runde_verloren: 0,
  thismatch: 0,

};
var match_count =0;
var counter =0;
// auswahl nur 'Steine', 'Papier', 'Schere' none
// die Funktionene sendToPlayer und sendToPlayers können desactiviert werden


class checkwin {
  

  constructor(p1=null, p2=null) {
    this._players = [p1, p2];
    this._turns = [null, null];

    this._sendToPlayers('Beide Spieler sind verbunden!');
    this._start(10);
    

    this._players.forEach((player, idx) => {
      player.on('turn', (turn) => {
        this._onTurn(idx, turn);

        
      });
    });
  }


   






  _sendToPlayer(playerIndex, msg) {
    this._players[playerIndex].emit('message', msg);
  }
  _sendstats(playerIndex, msg) {
    this._players[playerIndex].emit('message', msg);
  }

  _sendToPlayers(msg) {
    this._players.forEach((player) => {
      player.emit('message', msg);
    });
  }

  _onTurn(playerIndex, turn) {
    this._turns[playerIndex] = turn;
    this._sendToPlayer(playerIndex, `du hast ${turn} ausgewählt`);

    this._checkGameOver();
  }
  
 
  _checkGameOver() {
    const turns = this._turns;
    

    if (turns[0] && turns[1]) {
      //nicht notig ich habe ein Draw in case 1 implementiert
      match_count+=1
      this._sendToPlayers('Match Nummer :' + match_count );
    
      this._getGameResult();
      this._turns = [null, null];
      if (counter%3!=0){
        this._sendToPlayers('nächstes Match!!!!');
      }
      else if (counter%3===0){
        this._sendToPlayers('nächste Runde!!!!');
        if (player1["thismatch"]>player2["thismatch"]){
          this._sendRundeMessage(this._players[0], this._players[1]);
          //Runde auf 1 incrementieren 
          player1["Runde_gewonnen"] += 1;
          //für das nächste Match thismatch zu 0 initializieren
          player1["thismatch"] =0;
          player2["Runde_verloren"] += 1;
        }
        else{
          this._sendRundeMessage(this._players[1], this._players[0]);
          //Runde auf 1 incrementieren 
          player2["Runde_gewonnen"] += 1;
          //für das nächste Match thismatch zu 0 initializieren
          player2["thismatch"] =0;
          player1["Runde_verloren"] += 1;          
        }
      }
    }
  }

  _getGameResult() {
  
    

    const p0 = this._decodeTurn(this._turns[0]);
    const p1 = this._decodeTurn(this._turns[1]);
    if(p0==-1 ){
      p0=0;
      p1=2;
    }
    else if(p1==-1){
      p1=0;
      p0=2;
    }

    const distance = (p1 - p0 + 3) % 3;

    switch (true) {
      case distance==0:
        
        this._sendToPlayers('Draw!');
        break;

      case distance==1:
        this._sendWinMessage(this._players[0], this._players[1]);
        counter+=1;
        player1["thismatch"] += 1;
        player1["Match_gewonnen"] += 1;
        player2["Match_verloren"] += 1;

        break;

      case distance==2:
        this._sendWinMessage(this._players[1], this._players[0]);
        counter+=1;
        player2["thismatch"] += 1;
        player2["Match_gewonnen"] += 1;
        player1["Match_verloren"] += 1;
        break;

    }
  }

  _sendWinMessage(winner, loser) {
    winner.emit('message', "Sie haben gewonnen!");
    loser.emit('message', 'Sie haben Verloren!');
  }
  _sendRundeMessage(winner, loser) {
    loser.emit('message', 'Sie haben diese Runde Verloren!');  
    winner.emit('message', "Sie haben diese Runde gewonnen!");
      
  }

  _decodeTurn(turn) {
    switch (turn) {
      case 'Steine':
        return 0;
      case 'Schere':
        return 1;
      case 'Papier':
        return 2;
      case 'none':
        return -1
      default:
        throw new Error(`Could not decode turn ${turn}`);
    }
  }
  _start(timeleft){
    var nt=0;

    var downloadTimer = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(downloadTimer);
      }
      nt = 10 - timeleft;
      timeleft -= 1;
    }, 1000);

  }




}


module.exports = checkwin;
