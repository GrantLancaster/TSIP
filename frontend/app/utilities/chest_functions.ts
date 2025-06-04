export function openChest(chest:any, player: any, setPlayer: any) {
  if (player.gold >= chest.cost) {
    setPlayer({...player, gold: player.gold - chest.cost});
    let loot = chest.onBreak();
    player.inventory.push(loot);
    console.log(player.inventory);
    console.log(loot);
  }
}