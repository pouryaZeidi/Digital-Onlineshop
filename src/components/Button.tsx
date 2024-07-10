import { buttonprops } from '@/types/type'
import React from 'react'

const Button = ({txt,onclick,textSize}:buttonprops) => {
  return (
    <div className=''>
        <button className={`bg-secondary py-1 px-5 rounded-lg hover:bg-primary hover:text-secondary text-nowrap ${textSize}`} onClick={onclick} >{txt}</button>
    </div>
  )
}

export default Button