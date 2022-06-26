
function checkwin(p0,p1){
    // falls ein Spieler seine Wahl nicht getroffen hat
    if (p0=="None" && p1!='None'){
        return p1
    }
    else if (p1=='None' && p0!='None'){
        return p0
    }
    //für den Fall, dass die beiden Spieler ihre Wahl nicht getroffen haben
    else if (p0=='None' && p1=='None'){
        return 'draw'
    }
    //wenn beide Spieler ihre Wahl getroffen haben
    else{
        
        function decodeInput(input){
            switch (input) {
                case 'Stein':
                  return 0;
                case 'Schere':
                  return 1;
                case 'Papier':
                  return 2;
                default:
                  throw new Error(`Could not decode turn ${input}`);      
            }
        }
        //Ich wandle Strings in Integer um
        const p0_decode = decodeInput(p0);
        const p1_decode = decodeInput(p1);
        //Ich überprüfe, wer gewonnen hat
        const distance = (p1_decode - p0_decode + 3) % 3;
        //Ich gebe den Gewinner zurück
        switch (true) {
            case distance==0:
                return 'draw'
                break;
            case distance==1:
                return 'p1'
                break;   
            case distance==2:
                return 'p2'
                break;
        }
    }
}

module.exports = checkwin;
