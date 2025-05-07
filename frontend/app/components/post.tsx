import Post_Profile from "./post_profile";
import Post_Footer from "./post_footer";

export default function Post() {

  return (
    <>
      <div className="flex relative w-full max-w-2xl border h-[500px] rounded-xl">
        <div className="w-full">
            <Post_Profile />

            <div>
              <div>

              </div>
              <div>
                
              </div>
            </div>

            <Post_Footer />
        </div>
      </div>
    </>
  )
}