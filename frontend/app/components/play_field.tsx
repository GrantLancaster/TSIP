import { randomByWeight } from "~/utilities/number_generation";
import { standardChestTable } from "~/utilities/drop_tables";
import { Standard_Chest } from "~/utilities/object_classes/chests";
import { Basic_Enemy } from "~/utilities/object_classes/enemies";
import { attackEnemy } from "~/utilities/enemy_functions";
import { rollNewEnemy } from "~/utilities/enemy_functions";
import { openChest } from "~/utilities/chest_functions";
import { useEffect, useState } from "react";

export default function Play_Field({player, setPlayer}:{player: any; setPlayer: any;}) {
  /*
    WHAT NEEDS TO HAPPEN: FLOW OF THIS PROGRAM
    1. user and updateUser are passed as props
    2. useEffect to load an initial chest
      1. run a weighted number generation on a table
      2. load the resulting outcome (chest) into state
    3. Once chest is loaded, allow the user to buy it with gold
    4. Run the chest onBreak method to display the resulting outcome
    5. save the outcome to the user's inventory (probably and array, where items are objects).
  */

    //Chest will be pulled out into a shop interface.

    //

  const testChest = new Standard_Chest(standardChestTable);
  const testEnemy = new Basic_Enemy();
  const starterEnemy = testEnemy;
  const [enemy, setEnemy] = useState<any>(starterEnemy);
  const [chest, setChest] = useState<any>(testChest);

  function handleClick() {
    attackEnemy(enemy, setEnemy, player, setPlayer);
  }

  return (
    <>
    <div className="flex items-center justify-center mt-16 h-[500px] w-1/2 max-w-[1440px] bg-slate-900">
      <div className="flex justify-center flex-col items-center gap-4">
        <div
          className={`border-2 border-"white"-500 h-[150px] w-[250px] rounded-lg`}
          onClick={(e)=>{handleClick()}}>
            <p id="enemyName">{enemy.name}</p>

        </div>
        <p className="p-8" onClick={()=>{openChest(testChest, player, setPlayer)}}>
          {chest.name || "Mythic Chest"}: {chest.cost + " gold"}
        </p>
      </div>
    </div>
    </>
  )
}