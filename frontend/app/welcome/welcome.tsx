import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import Post from "~/components/post";
import Play_Field from "~/components/play_field";
import Stats_Panel from "~/components/stats_panel";
import Equipment_Panel from "~/components/equipment_panel";


export function Welcome() {
  return (
    <>
      <div className="flex gap-4 justify-center items-center">
        <Stats_Panel />
        <Play_Field />
        <Equipment_Panel />
      </div>

    </>
  );
}


