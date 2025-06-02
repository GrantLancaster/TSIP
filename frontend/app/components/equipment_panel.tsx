/*
THIS COMPONENT WILL NEED
- player equipment
- images for the player's eqipment 
- hover over the image to see that gear's stats (this will be simple at first->just attack or luck up)
*/

export default function Equipment_Panel({player, setPlayer}:{player: any; setPlayer: any;}) {

  return (
    <div className="border-2 border-violet-500 rounded-lg p-[0.5em] w-[200px] h-[400px]">
      <h1 className="font-bold">Equipment</h1>
      <ul>
        <li className="p-[0.5em] w-[100px] h-[100px] border-1 border-gray-500 rounded-lg">Sword</li>
        <li className="p-[0.5em] w-[100px] h-[100px] border-1 border-gray-500 rounded-lg">Helment</li>
        <li className="p-[0.5em] w-[100px] h-[100px] border-1 border-gray-500 rounded-lg">Chest Piece</li>
      </ul>
    </div>
  )
}