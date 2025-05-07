

export default function Post_Footer() {

  return (
    <>
            <div className="flex absolute bottom-0 p-2 justify-evenly align-center w-full border-t">
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <svg height={25} width={25}></svg>
                  <p>Like</p>
                </div>
                <p className="text-[12px]">294</p>
              </div>

                <div className="flex items-center">
                  <svg height={25} width={25}></svg>
                  <p>Comment</p>
                </div>

                <div className="flex items-center">
                  <svg height={25} width={25}></svg>
                  <p>Share</p>
                </div>

            </div>
    </>
  )
}