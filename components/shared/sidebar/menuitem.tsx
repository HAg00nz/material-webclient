import Link from 'next/link'
import React from 'react'

const MenuItem = ({
  id,
  name,
  href,
  classes,
}: {
  id: number
  name: string
  href: string
  classes: string
}) => {
  return (
    <li className='text-sm list-none my-2'>
      <Link key={id} href={href} className={classes}>
        {name}
      </Link>
    </li>
  )
}

export default MenuItem
