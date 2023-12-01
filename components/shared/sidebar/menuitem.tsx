import Link from "next/link"
import React from "react"

const MenuItem = ({
  key,
  name,
  href,
}: {
  key: number
  name: string
  href: string
}) => {
  return (
    <li className='text-sm'>
      <Link key={key} href={href}>
        {name}
      </Link>
    </li>
  )
}

export default MenuItem
