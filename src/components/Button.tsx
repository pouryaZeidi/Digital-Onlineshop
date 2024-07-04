import { buttonprops } from '@/types/type'
import React from 'react'

const Button = ({txt}:buttonprops) => {
  return (
    <div className=''>
        <button className=' bg-secondary py-1 px-5  rounded-lg hover:bg-Primary hover:text-secondary ' >{txt}</button>
    </div>
  )
}

export default Button