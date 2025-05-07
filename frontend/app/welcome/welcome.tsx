import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import Post from "~/components/post";
import Play_Field from "~/components/play_field";

export function Welcome() {
  return (
    <>
      <div className="flex gap-4 justify-center items-center">

      <div className="border-2 border-violet-500 rounded-lg p-[0.5em] w-[200px] h-[400px]">
        {/* This will be the stats panel on the left side */}
        <h1 className="font-bold">Player Stats</h1>
        <ul>
          <li>Click Power:</li>
          <li>Luck:</li>
        </ul>
      </div>

        <Play_Field chest="standard chest" />

      <div className="border-2 border-violet-500 rounded-lg p-[0.5em] w-[200px] h-[400px]">
        {/* This will be the inventory on the right side */}
        <h1 className="font-bold">Equipment</h1>
        <ul>
          <li>sword</li>
          <li>helment</li>
        </ul>
      </div>

      </div>

    </>
  );
}


