var assert = require('assert');
const checkwin = require("../game/function/checkwin");

describe('CheckWin', () => {

    it('Keiner der Spieler trifft Auswahl = Draw', () => {
        assert.equal(checkwin('None', 'None'), 'draw');
    });

    it('Einer der Spieler trifft keine Auswahl', () => {
        assert.equal(checkwin('Stein', 'None'), 'p1');
        assert.equal(checkwin('None', 'Stein'), 'p2');
    });

    it('Stein gewinnt gegen Schere', () => {
        assert.equal(checkwin('Stein', 'Schere'), 'p1');
        assert.equal(checkwin('Schere', 'Stein'), 'p2');
    });

    it('Schere gewinnt gegen Papier', () => {
        assert.equal(checkwin('Schere', 'Papier'), 'p1');
        assert.equal(checkwin('Papier', 'Schere'), 'p2');
    });

    it('Papier gewinnt gegen Stein', () => {
        assert.equal(checkwin('Papier', 'Stein'), 'p1');
        assert.equal(checkwin('Stein', 'Papier'), 'p2');
    });

    it('Gleiche Auswahl = draw', () => {
        assert.equal(checkwin('Papier', 'Papier'), 'draw');
        assert.equal(checkwin('Stein', 'Stein'), 'draw');
        assert.equal(checkwin('Schere', 'Schere'), 'draw');
    });

    it('Input error', () => {
        assert.throws(() => {checkwin('abc', 'def')}, Error);
    })
});