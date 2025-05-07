

export default function NavBar() {

  return (
    <>
      <div className="flex justify-center sticky top-0 w-full bg-slate-900 z-10">
          <nav className="flex justify-between w-[85%] max-w-6xl h-14 rounded-full">
            <ul className=" text-base flex justify-center items-center gap-8">
              <li>
                <svg width="49" height="40" viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37.3947 40C43.8275 39.8689 49 34.6073 49 28.1389C49 24.9931 47.7512 21.9762 45.5282 19.7518L25.7895 0V12.2771C25.7895 14.3303 26.6046 16.2995 28.0556 17.7514L32.6795 22.3784L32.6921 22.3907L40.4452 30.149C40.697 30.4009 40.697 30.8094 40.4452 31.0613C40.1935 31.3133 39.7852 31.3133 39.5335 31.0613L36.861 28.3871H12.139L9.46655 31.0613C9.21476 31.3133 8.80654 31.3133 8.55476 31.0613C8.30297 30.8094 8.30297 30.4009 8.55475 30.149L16.3079 22.3907L16.3205 22.3784L20.9444 17.7514C22.3954 16.2995 23.2105 14.3303 23.2105 12.2771V0L3.47175 19.7518C1.24882 21.9762 0 24.9931 0 28.1389C0 34.6073 5.17252 39.8689 11.6053 40H37.3947Z" fill="oklch(0.606 0.25 292.717)"></path>
                </svg>
              </li>
              <li className="px-2 hover:border-b-4 h-[28px] border-b-violet-500 text-center">Play</li>
              <li className="px-2 hover:border-b-4 h-[28px] border-b-violet-500 text-center">Inventory</li>
              <li className="px-2 hover:border-b-4 h-[28px] border-b-violet-500 text-center">Shop</li>
            </ul>
            <div className=" text-base flex justify-center items-center">
              <svg id="logo-82" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" strokeWidth={3} stroke="oklch(0.606 0.25 292.717)" />
              <circle cx="20" cy="15" r="7" stroke="white" />
              <path d="M5,35 h30 C 35,35 20,15 5,35" stroke="white"/>  
              </svg>
            </div>
          </nav>
      </div>
    </>
  )
}