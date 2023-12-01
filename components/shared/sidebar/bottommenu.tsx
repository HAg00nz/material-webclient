import { HiOutlineCog } from "react-icons/hi"
import { HiOutlineUser } from "react-icons/hi"
import Tools from "./tools"

const BottomMenu = () => {
  return (
    <div>
      <Tools />
      <div className='flex items-center gap-1 mt-2'>
        <HiOutlineUser />
        Profile
      </div>
      <div className='flex items-center gap-1'>
        <HiOutlineCog />
        Settings
      </div>
    </div>
  )
}

export default BottomMenu
