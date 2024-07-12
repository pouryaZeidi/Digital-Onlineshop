import { hamburgerprops } from '@/types/type';
import React from 'react'
import { TiThMenu } from "react-icons/ti";

const HamburgerMenu = ({onclick}:hamburgerprops) => {
  return (
    <div className='text-3xl h-fit ml-6 hover:opacity-65 cursor-pointer'>
        <TiThMenu onClick={onclick} />
    </div>
  )
}

export default HamburgerMenu