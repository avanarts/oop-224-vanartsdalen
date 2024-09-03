function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}

Player.prototype.gainXp = function(num) {
    this.points += num;

    if(this.points >= 10) {
        this.lvl++;
        this.points -= 10;
    }
}

Player.prototype.describe = function() {
    console.log(`${this.name} is level ${this.lvl} with ${this.points} points.`)
}

const player1 = new Player('Helena');


player1.gainXp(4);
player1.describe()
player1.gainXp(11);
player1.describe();