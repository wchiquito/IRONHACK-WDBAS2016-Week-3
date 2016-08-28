function Fighter(health, strength) {
    this.health = health;
    this.strength = strength;
}

Fighter.prototype.attack = function() {
    return this.strength;
};

Fighter.prototype.damage = function(damage) {
    return (this.health -= damage);
};

module.exports = {
    Fighter: Fighter
};