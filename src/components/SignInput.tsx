import { inputprops } from '@/types/type'
import React from 'react'

const SignInput = ({txt,placeholder}:inputprops) => {
  return (
    <label className='ml-2'>
      <span className=' font-serif font-semibold '>{txt}:</span>
      <input type="text" className='border bg-Primary bg-opacity-30 rounded-2xl w-[280px] p-1 pl-2 ' placeholder={placeholder} />
    </label>
  )
}

export default SignInput