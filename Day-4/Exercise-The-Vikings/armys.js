var viking = require('./viking.js');

function Armys() {
    function vikingPit() {
        return [0, 1].map(function() {
            return new viking.Viking();
        });
    }

    return {
        vikingPit: vikingPit
    }
}

module.exports = {
    Armys: Armys
};