import type { Weapon } from "~/utilities/object_classes/weapons";


export default function Weapon_Card({weapon}:{weapon: Weapon;}) {

  return (
    <>
      <div className="w-[30%] max-w-[250px] bg-black p-4 flex flex-col items-center justify-center gap-4 rounded-lg">
        <img className="w-[100px] h-[100px]" src="" alt="" />
        <div id="weapon_stats">
          <h3>{weapon.name}</h3>
          <p>Type: {weapon.category}</p>
          <p>Attack: {weapon.attack_damage}</p>
        </div>
      </div>
    </>
  )
}