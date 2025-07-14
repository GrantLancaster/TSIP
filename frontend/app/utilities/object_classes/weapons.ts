
export class Weapon {
  rarity: string;
  category: string;
  name: string;
  attack_damage: number;
  buy_cost: number;
  sell_cost: number;
  constructor(rarity:string, name:string) {
    this.rarity = rarity;
    this.category = "weapon";
    this.name = this.rarity + " " + name;
    this.attack_damage = 5; // This value should be a random value scaled by the rarity.
    this.buy_cost = 50;
    this.sell_cost = 30
  }
}
