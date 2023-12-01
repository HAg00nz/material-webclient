import React from "react"
import Logotype from "./logotype"
import MainMenu from "./mainmenu"
import BottomMenu from "./bottommenu"

const Sidebar = () => {
  return (
    <div className='flex flex-col h-screen w-[220px] p-5 bg-[#011627] text-white'>
      <div>
        <Logotype />
      </div>
      <div className='mt-5 flex-grow'>
        <MainMenu />
      </div>
      <div className='mb-auto'>
        <BottomMenu />
      </div>
    </div>
  )
}

export default Sidebar
