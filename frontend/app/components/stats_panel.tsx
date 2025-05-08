/*
WILL NEED FOR THIS COMP:
- Player -> have grab user stats and calculate multipliers based on equiped gear.
This just displays user stats, so math can potentially be done somewhere else, and 
numbers simply be displayed in this component.
*/

export default function Stats_Panel({}:{}) {

  return (
    <div className="border-2 border-violet-500 rounded-lg p-[0.5em] w-[200px] h-[400px]">
      <h1 className="font-bold">Player Stats</h1>
      <ul>
        <li>Attack Power:</li>
        <li>Luck:</li>
        <li>Gold Find:</li>
      </ul>
    </div>
  )
}