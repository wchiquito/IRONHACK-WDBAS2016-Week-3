var util = require('./util.js');
var armys = require('./armys.js');

function battleField(armys) {
    var MINTURNS = BITCONTROL = 1;
    var DEFAULTTURNS = 3;

    function validTurns(NumberOfTurns) {
        return NumberOfTurns < MINTURNS
                ? DEFAULTTURNS
                : NumberOfTurns;
    }

    function getInitArmy() {
        var initTurn = util.getRandomInt(0, 2);
        return [initTurn ^ BITCONTROL, initTurn & BITCONTROL];
    }

    function start(NumberOfTurns) {
        fight(validTurns(NumberOfTurns));
    }

    function fight(NumberOfTurns) {
        //TODO: It's necessary to implement fights engine
        
        /* PARTIAL TEST THE VIKING PIT */
        var initArmy = getInitArmy();
        var firstArmy = initArmy[0];
        var secondArmy = initArmy[1];
        for (var turn = 0; turn < NumberOfTurns; ++turn) {
            printStatus(turn, armys[firstArmy], armys[secondArmy]);
            armys[secondArmy].damage(armys[firstArmy].attack());
            printStatus(turn, armys[firstArmy], armys[secondArmy]);
            armys[firstArmy].damage(armys[secondArmy].attack());
            printStatus(turn, armys[firstArmy], armys[secondArmy]);
        }
        /* PARTIAL TEST THE VIKING PIT */
    }

    function printStatus(turn, army_one, army_two) {
        console.log('Turn #%s - %s: %s, health: %d, strength: %d ** %s: %s, health: %d, strength: %d',
            ++turn,
            army_one.constructor.name,
            army_one.name,
            army_one.health,
            army_one.strength,
            army_two.constructor.name,
            army_two.name,
            army_two.health,
            army_two.strength);
    }

    return {
        start: start
    }
}

(new battleField((new armys.Armys()).vikingPit())).start(5);