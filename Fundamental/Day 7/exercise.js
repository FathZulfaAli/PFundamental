/** @format */

class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }
  demage(power) {
    this.health -= power;
    if (this.health < 0) this.health = 0;
  }
  useItem(item) {
    this.health += item.health;
    this.power += item.power;
  }
  showStatus() {
    console.log(
      `Player ${this.name} (health => ${this.health}, power => ${this.power})`
    );
  }
}

//register player
const player1 = new Player("Haruno");
const player2 = new Player("Kizuna");
console.log(player1, player2);

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }
}
