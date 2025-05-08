import { generateNum1To100 } from "~/utilities/number_generation";

export default function Play_Field({chest}:{chest?:string}) {

  function handleChestClick() {
    console.log("I hit the chest");
  }

  return (
    <>
    <div className="flex items-center justify-center mt-16 h-[500px] w-1/2 max-w-[1440px] bg-slate-900">
      <div className="flex justify-center flex-col items-center">
        <div
          className={`border-2 border-${"white"}-500 h-[150px] w-[250px] rounded-lg`}
          onClick={()=>{console.log(generateNum1To100())}}>

        </div>
        <p className="p-8">{chest || "Mythic Chest"}</p>
      </div>
    </div>
    </>
  )
}