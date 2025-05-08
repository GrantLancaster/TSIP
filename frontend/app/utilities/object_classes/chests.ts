import { randomByWeight } from "../number_generation";


export class Standard_Chest {
  health: number;
  name: string;
  table: any; // Change this to correct typing once created.
  constructor(table: any) {
    this.health = 10;
    this.name = "Standard Chest";
    this.table = table;
  }

  onBreak():string {
    const drop = randomByWeight(this.table[0], this.table[1]);
    return drop;
  }
}