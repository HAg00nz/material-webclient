'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { materialtype, columns } from './columns'
import { DataTable } from './datatable'

interface Material {
  materialNo: string
  opNr: number
  lopNr: number
  to: string
  lagerplats: string
  vikt: number
  antal: number
  status: string
  created: Date
  modified: Date
}

function Material() {
  const [material, setMaterial] = useState([] as Material[])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const response = await fetch(
      'https://api-ovako-idkontroll.azurewebsites.net/api/Material/100/1?search=' +
        search,
      {
        headers: {
          'x-api-key': 'abd4dc6d29f947d483b33256ac21a0cb',
        },
      }
    )

    if (response.status == 200) {
      const m: Material[] = await response.json()
      setMaterial(m)
    }
  }

  return (
    <div className='flex flex-col gap-5 w-full h-full'>
      <div className='flex items-center'>
        <div className='mr-2'>
          <Button variant='outline' onClick={() => fetchData()}>
            Search
          </Button>
        </div>
        <div className='w-full mr-[55px]'>
          <input
            placeholder='Sökbegrepp'
            onChange={(s) => setSearch(s.target.value)}
            className='shadow w-full p-2'
          ></input>
        </div>
      </div>

      <DataTable columns={columns} data={material} />
    </div>
  )
}

export default Material
