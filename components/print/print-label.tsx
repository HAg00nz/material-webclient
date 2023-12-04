import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SlPrinter } from 'react-icons/sl'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function PrintLabel() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>
          <SlPrinter />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[600px]'>
        <DialogHeader>
          <DialogTitle>Print label</DialogTitle>
          <DialogDescription>
            Please select template and printer.
          </DialogDescription>
        </DialogHeader>
        <div className='flex'>
          <div className='flex flex-col w-1/2 p-2'>
            Select template
            <Select name='templateSelect'>
              <SelectTrigger className=''>
                <SelectValue placeholder='Template' />
                <SelectItem value={'Roger 1'}></SelectItem>
              </SelectTrigger>
              <SelectContent></SelectContent>
            </Select>
          </div>
          <div className='flex flex-col w-1/2 p-2'>
            Select printer
            <Select name='printerSelect'>
              <SelectTrigger className=''>
                <SelectValue placeholder='Printer' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={'Roger 1'}></SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* 
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="message" className="text-right">
              Message
            </Label>
            <Input id="message" value="message ..." className="col-span-3" />
          </div>
        </div>
        */}
        <DialogFooter>
          <Button type='submit'>Print</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
