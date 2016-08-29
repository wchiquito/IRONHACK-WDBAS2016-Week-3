var util = require('./util.js');
var fighter = require('./fighter.js');

var HEALTH = [50, 101];
var STRENGTH = [5, 8];
var FAMELE = [
                'Astrid',
                'Bodil',
                'Frida',
                'Gertrud',
                'Gro',
                'Estrid',
                'Hilda'
            ]
var MALES = [
                'Arne',
                'Birger',
                'Erik',
                'Frode',
                'Gorm',
                'Halfdan',
                'Harald'
            ]

function Viking() {
    this.health = util.getRandomInt(HEALTH[0], HEALTH[1]);
    this.strength = util.getRandomInt(STRENGTH[0], STRENGTH[1]);
    this.name = getName();
}

Viking.prototype = new fighter.Fighter();
Viking.prototype.constructor = Viking;

function getName() {
    return MALES[util.getRandomInt(0, MALES.length - 1)];
}

module.exports = {
    Viking: Viking
};
