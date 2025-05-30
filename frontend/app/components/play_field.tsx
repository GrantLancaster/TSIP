import { randomByWeight } from "~/utilities/number_generation";
import { standardChestTable } from "~/utilities/drop_tables";
import { Standard_Chest } from "~/utilities/object_classes/chests";
import { useState } from "react";
import test from "~/routes/profile";

export default function Play_Field({}:{}) {
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

  const testChest = new Standard_Chest(standardChestTable);
  const [chest, setChest] = useState<any>(testChest)
  const [money, setMoney] = useState<number>(0);
  let outcome: string = "";

  function getMoney() {
    setMoney(money + 1);
  }

  function openChest(chest:any) {
    if (money >= chest.cost) {
      setMoney(money - chest.cost);
      let loot = chest.onBreak();
      console.log(loot);
    }
  }

  return (
    <>
    <div className="flex items-center justify-center mt-16 h-[500px] w-1/2 max-w-[1440px] bg-slate-900">
      <div className="flex justify-center flex-col items-center gap-4">
        <div
          className={`border-2 border-${"white"}-500 h-[150px] w-[250px] rounded-lg`}
          onClick={()=>{getMoney()}}>

        </div>
        <p className="p-8" onClick={()=>{openChest(testChest)}}>
          {chest.name || "Mythic Chest"}: {chest.cost + " gold"}
        </p>
        <p>{money}</p>
      </div>
    </div>
    </>
  )
}