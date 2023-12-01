import Link from "next/link"
import React from "react"

const MenuItem = ({
  id,
  name,
  href,
}: {
  id: number
  name: string
  href: string
}) => {
  return (
    <li className='text-sm list-none my-2'>
      <Link key={id} href={href}>
        {name}
      </Link>
    </li>
  )
}

export default MenuItem
