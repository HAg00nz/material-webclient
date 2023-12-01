"use client"
import { Button } from "@/components/ui/button"
import { SlPrinter } from "react-icons/sl"
import { HiOutlineQrCode } from "react-icons/hi2"
import { Separator } from "@/components/ui/separator"

const Tools = () => {
  return (
    <>
      <Separator />
      <div className='flex gap-5 my-2 justify-center'>
        <Button variant='outline'>
          <SlPrinter />
        </Button>
        <Button variant='outline'>
          <HiOutlineQrCode />
        </Button>
      </div>
      <Separator />
    </>
  )
}

export default Tools
