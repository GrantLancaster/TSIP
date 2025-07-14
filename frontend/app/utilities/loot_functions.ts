import { randomByWeight } from "./number_generation";
import { randomBetweenTwoValues } from "./number_generation";
import { itemRarityTable, hasADropTable } from "./drop_tables";
import { Weapon } from "./object_classes/weapons";


export function newLootDrop() {
  const rarity = randomByWeight(itemRarityTable[0], itemRarityTable[1]);
  const item = new Weapon(rarity, "Long Sword");
  return item;
}