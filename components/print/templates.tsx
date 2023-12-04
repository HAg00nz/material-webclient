'use client'

import { useState, useEffect } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import useStore from '@/app/store/store'

const TemplateList = () => {
  const [LayoutData, setLayoutsData] = useState<any[]>([])

  useEffect(() => {
    const Layouts = async () => {
      try {
        const Layouts = await fetch('http://localhost:3000/api/layouts', {
          method: 'GET',
          cache: 'no-store',
        })
        const responseL = await Layouts.json()
        setLayoutsData(responseL)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    Layouts()
  }, [])
  const LayoutID = useStore((state: any) => state.onLayoutIDClick)
  const layoutData = useStore((state: any) => state.onLayoutDataClick)
  return (
    <ScrollArea className='w-full rounded-md border p-4'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>ID</TableHead>
            <TableHead>Template Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {LayoutData.map((layout) => (
            <TableRow
              onClick={() => {
                LayoutID(layout.layoutId)
                layoutData(layout.parameters)
              }}
              key={layout.layoutId}
            >
              <TableCell className='font-medium'>{layout.layoutId}</TableCell>
              <TableCell>{layout.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  )
}

export default TemplateList
