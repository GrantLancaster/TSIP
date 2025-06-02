

export class Basic_Enemy {
  health: number;
  gold_drop: number;
  name: string;

  constructor() {
    this.health = 10;
    this.gold_drop = Math.floor(Math.random()*20);
    this.name = "Basic Dude"
  }
}

export class Rare_Enemy {
  health: number;
  gold_drop: number;
  name: string;
  constructor() {
    this.health = 25;
    this.gold_drop = Math.floor(Math.random() * 70)
    this.name = "Rare Fighter";
  }
}

export class Epic_Enemy extends Basic_Enemy {
  health: number;
  gold_drop: number;
  name: string;
  constructor() {
    super()
    this.health = 150;
    this.gold_drop = Math.floor(Math.random()*120);
    this.name = "Epic Warrior";
  }
}
