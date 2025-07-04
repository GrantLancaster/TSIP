import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import Post from "~/components/post";
import Play_Field from "~/components/play_field";
import Stats_Panel from "~/components/stats_panel";
import Equipment_Panel from "~/components/equipment_panel";
import { useState } from "react";


export function Welcome({player, setPlayer}:{player: any; setPlayer: any;}) {

  const [showInventory, setShowInventory] = useState<any>(false);

  // Creating an inventory panel. This will render stuff based on the 
  // players inventory. The user can select what gear they want equiped 
  // in this screen.
  // extrapolate inventory code into new component.

  return (
    <>
      <div className="flex gap-4 justify-center items-center">
        <Stats_Panel player={player} setPlayer={setPlayer} />
        <Play_Field player={player} setPlayer={setPlayer} />
        <Equipment_Panel 
          player={player} 
          setPlayer={setPlayer} 
          showInventory={showInventory} 
          setShowInventory={setShowInventory} 
        />
        {showInventory && 
        <>
          <div className="absolute bg-black opacity-50 h-full w-full"></div>
          <div className="rounded-lg h-[80%] w-[80%] absolute m-16 bg-red-500">
            <p onClick={()=>{setShowInventory(false)}}>close</p>
          </div>
        </>}
      </div>

    </>
  );
}


