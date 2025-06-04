/*
WILL NEED FOR THIS COMP:
- Player -> have grab user stats and calculate multipliers based on equiped gear.
This just displays user stats, so math can potentially be done somewhere else, and 
numbers simply be displayed in this component.
*/

import { useEffect, useState } from "react"

export default function Stats_Panel({player, setPlayer}:{player: any; setPlayer: any;}) {

  return (
    <div className="h-[500px] mt-16">
      <div className="border-2 border-violet-500 rounded-lg p-[0.5em] w-[200px] h-[400px]">
        <h1 className="font-bold">{player.name}'s Stats</h1>
        <ul>
          <li>Attack Power: {player.attack_power}</li>
          <li>Luck: {player.luck}</li>
          <li>Gold Find: {player.gold_find}</li>
          <li>Current Gold: <span className="text-amber-500">{player.gold}</span></li>
        </ul>
      </div>
    </div>
  )
}