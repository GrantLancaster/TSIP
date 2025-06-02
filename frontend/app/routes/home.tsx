import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import NavBar from "~/components/navbar";
import { useState, useEffect } from "react";
import { current_user } from "~/utilities/user_stats";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gear Box" },
    { name: "description", content: "An idle clicker loot game" },
  ];
}

export default function Home() {

  const [player, setPlayer] = useState<any>(current_user);

  return (
  <>
    <NavBar />
    <Welcome player={player} setPlayer={setPlayer} />
  </>
  )
}
