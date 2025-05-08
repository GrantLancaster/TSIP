import { randomByWeight } from "~/utilities/number_generation";
import { standardChestTable } from "~/utilities/drop_tables";
import { Standard_Chest } from "~/utilities/object_classes/chests";

export default function Play_Field({chest}:{chest?:string}) {

  const testChest = new Standard_Chest(standardChestTable);
  let outcome: string = "";

  function handleClick() {
    testChest.health -=1;
    if (testChest.health <= 0) {
      outcome = testChest.onBreak();
      console.log(outcome);
    }

  }

  return (
    <>
    <div className="flex items-center justify-center mt-16 h-[500px] w-1/2 max-w-[1440px] bg-slate-900">
      <div className="flex justify-center flex-col items-center">
        <div
          className={`border-2 border-${"white"}-500 h-[150px] w-[250px] rounded-lg`}
          onClick={()=>{handleClick()}}>

        </div>
        <p className="p-8">{chest || "Mythic Chest"}</p>
      </div>
    </div>
    </>
  )
}