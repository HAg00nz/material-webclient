"use client"
import { Button } from "@/components/ui/button"
import { SlPrinter } from "react-icons/sl"
import { HiOutlineQrCode } from "react-icons/hi2"
import { Separator } from "@/components/ui/separator"
import { QRButton } from "@/components/qr/qr-button"
import { PrintLabel } from "@/components/print/print-label"

const Tools = () => {
  return (
    <>
      <Separator />
      <div className='flex gap-5 my-2 justify-center'>
        <PrintLabel />
        <QRButton />
      </div>
      <Separator />
    </>
  )
}

export default Tools
