import Weapon_Card from "./weapon_card";

export default function Inventory_Panel(
  {player, setPlayer, showInventory, setShowInventory}:
  {player:any; setPlayer:any; showInventory:any; setShowInventory:any;}) {

  return (
    <>
      <div className="absolute bg-black opacity-50 h-full w-full"></div>
        <div className="rounded-lg h-[80%] w-[80%] absolute m-16 bg-slate-900 overflow-auto">
        <p className="p-2 text-right w-full sticky top-0" onClick={()=>{setShowInventory(false)}}>close</p>
        <div className="p-8 flex flex-wrap w-full justify-center gap-4">
          {player.inventory.map((item:any, index:number)=>(
            <Weapon_Card weapon={item} />
          ))}
        </div>
      </div>
    </>
  )
}