/*
THIS COMPONENT WILL NEED
- player equipment
- images for the player's eqipment 
- hover over the image to see that gear's stats (this will be simple at first->just attack or luck up)
*/


export default function Equipment_Panel({
  player, setPlayer, showInventory, setShowInventory
}:{
  player: any; setPlayer: any; showInventory: boolean; setShowInventory: any;}) {

  return (
    <div className="h-[500px] mt-16">
      <div className="flex gap-8 flex-col border-2 border-violet-500 rounded-lg p-[0.5em] w-[200px] h-[400px]">
        <h1 className="font-bold text-xl">Equipment</h1>
        <ul className="flex flex-wrap">
          <li className="p-[0.5em] w-1/2 border-1 border-gray-500 rounded-lg">Sword</li>
          <li className="p-[0.5em] w-1/2 border-1 border-gray-500 rounded-lg">Helment</li>
          <li className="p-[0.5em] w-1/2 border-1 border-gray-500 rounded-lg">Chest</li>
        </ul>
      </div>
      <h1 className="font-bold py-2 my-4 hover:border-b-2 border-violet-500"
      onClick={()=>{setShowInventory(true)}}>Open Inventory</h1>
    </div>
  )
}