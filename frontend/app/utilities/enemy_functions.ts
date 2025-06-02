import { randomByWeight } from "./number_generation";
import { enemyChangeTable } from "./drop_tables";
import { Basic_Enemy, Rare_Enemy, Epic_Enemy } from "./object_classes/enemies";

export function rollNewEnemy() {
  const result = randomByWeight(enemyChangeTable[0], enemyChangeTable[1]);
  let enemy;
  switch (result) {
    case "Basic":
      enemy = new Basic_Enemy();
    break
    case "Rare":
      enemy = new Rare_Enemy();
    break
    case "Epic":
      enemy = new Epic_Enemy();
    break
  }
  return enemy
}

export function attackEnemy(enemy: any, setEnemy: any, player: any, setPlayer:any) {
  enemy.health -= (1 + player.attack_power);
  if (enemy.health <= 0) {
    setPlayer({...player, gold: player.gold + enemy.gold_drop});
    setEnemy(rollNewEnemy());
  }
}