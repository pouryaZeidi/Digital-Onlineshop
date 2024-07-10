import React from 'react'
import { titelprops } from '../types/type'
import Link from 'next/link'
import { BsArrowBarRight } from "react-icons/bs";

const CategoriesTitle = ({txt,href,txtlink}:titelprops) => {
  return (
    <div className='flex ml-5 flex-col items-start sm:flex-row sm:items-end'>
    <div className='ml-1 mr-5 mt-8 text-[17px] sm:text-[28px] md:text-[43px] font-serif bg-Primary bg-opacity-20 text-ellipsis rounded-2xl p-3 hover:text-yellow-300  flex justify-center hover:bg-opacity-55 cursor-pointer '>{txt}</div>
    <Link className='flex items-center mt-2 text-nowrap bg-secondary rounded-xl p-2 hover:bg-opacity-35 font-serif hover:text-Primary ' href={href}>{txtlink}<BsArrowBarRight /></Link>
    </div>
  )
}

export default CategoriesTitle