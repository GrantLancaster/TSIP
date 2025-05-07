import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import NavBar from "~/components/navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gear Box" },
    { name: "description", content: "An idle clicker loot game" },
  ];
}

export default function Home() {
  return (
  <>
    <NavBar />
    <Welcome />
  </>
  )
}
