import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { HiOutlineQrCode } from "react-icons/hi2"

export function QRButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>
          <HiOutlineQrCode />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Print QR label</DialogTitle>
          <DialogDescription>
            Please input text to print in the QR code.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="message" className="text-right">
              Message
            </Label>
            <Input id="message" value="message ..." className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Generate QR code</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
