'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'
import { LuArrowUpDown, LuMoreHorizontal } from 'react-icons/lu'
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type materialtype = {
  to: number
  status: string
  vikt: number
  materialNo: string
  lagerplats: string
  antal: number
}

export const columns: ColumnDef<materialtype>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'to',
    header: 'To',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'vikt',
    header: 'Vikt',
  },
  {
    accessorKey: 'materialNo',
    header: 'MaterialNo',
  },
  {
    accessorKey: 'lagerplats',
    header: 'Lagerplats',
  },
  {
    accessorKey: 'antal',
    header: 'Antal',
  },
]
