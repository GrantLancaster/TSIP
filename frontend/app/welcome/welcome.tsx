import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import Post from "~/components/post";

export function Welcome() {
  return (
    <main className="flex justify-center pt-16 pb-4 max-w-[1440px] bg-slate-900">
      <div className="flex-1 flex flex-col items-center gap-16">

      <Post />
      <Post />
      <Post />
      <Post />


      </div>
    </main>
  );
}


