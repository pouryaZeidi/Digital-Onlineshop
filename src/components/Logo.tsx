import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/' className='hover:opacity-75 w-16'>
        <img src="/Logo.png" alt="Logo-DigiTech" className='w-[86px]' />
    </Link>
   
  )
}

export default Logo