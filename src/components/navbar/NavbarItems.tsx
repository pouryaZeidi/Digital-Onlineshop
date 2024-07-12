import { navbaritemprops } from '@/types/type'
import Link from 'next/link'
import React from 'react'

const NavbarItems = ({href,txt}:navbaritemprops) => {
  return (
    <Link 
        href={href} 
        className=' capitalize font-sans inline-block py-1 px-5 hover:bg-Primary  hover:text-secondary duration-300 h-fit ease-in-out rounded-lg '  >
        {txt}
    </Link>
  )
}

export default NavbarItems