'use client'

import { useState, useEffect } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import useStore from '@/app/store/store'

const PrinterList = () => {
  const [PrinterData, setPrintersData] = useState<any[]>([])

  useEffect(() => {
    const printers = async () => {
      try {
        const printers = await fetch('http://localhost:3000/api/printers', {
          method: 'GET',
          cache: 'no-store',
        })
        const response = await printers.json()
        setPrintersData(response)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    printers()
  }, [])

  const printID = useStore((state: any) => state.onPrinterClick)
  return (
    <ScrollArea className='h-full w-full rounded-md border p-4'>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>ID</TableHead>
            <TableHead>Printer Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {PrinterData.map((printer) => (
            <TableRow
              onClick={() => printID(printer.printerId)}
              key={printer.printerId}
            >
              <TableCell className='font-medium'>{printer.printerId}</TableCell>
              <TableCell>{printer.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  )
}

export default PrinterList
