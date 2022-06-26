
function startGame(){
    alert('start');
}

function Pregame() {
    return (
        <button onClick={startGame} data-testid='pregame'>Spiel starten</button>
    );
}

export default Pregame;