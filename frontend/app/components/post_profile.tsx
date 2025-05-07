

export default function Post_Profile() {

  return (
    <>
      <main className="w-full flex justify-between border-b">
        <div className="flex m-4">
          <div id="profile_pic" className="h-[60px] w-[60px]">
            <img alt="" />
          </div>

          <div className="flex flex-col justify-right">
            <div id="profile_name">
              <p className="text-[12pt]">John Does</p>
            </div>
            <div id="follower_count">
              <p className="text-[12px]">10,000 followers</p>
            </div>
            <div id="time_of_post">
              <p className="text-[12px]">21 minutes ago</p>
            </div>
          </div>
        </div>


        <div id="follow_button" className="m-4 flex justify-center items-center">
          <button className="text-cyan-300 font-bold">+ Follow</button>
        </div>
      </main>
    </>
  )
}