import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import Post from "~/components/post";

export function Welcome() {
  return (
    <>
      <div className="flex gap-4 justify-center items-center">

      <div className="bg-red-500 w-[200px] h-[400px]">
        {/* This will be the stats panel on the left side */}
      </div>

      <main className="flex justify-center mt-16 w-1/2 max-w-[1440px] bg-slate-900">
        <div className="flex-1 flex flex-col items-center gap-16">

        <Post />

        </div>
      </main>

      <div className="bg-red-500 w-[200px] h-[400px]">
        {/* This will be the inventory on the right side */}
      </div>

      </div>

    </>
  );
}


