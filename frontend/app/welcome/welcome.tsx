import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4 max-w-[1440px]">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center max-w-4xl text-center">
          <h1 className="text-9xl">This Website is Pointless</h1>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
        </div>
      </div>
    </main>
  );
}


