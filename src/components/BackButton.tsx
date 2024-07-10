import { useRouter } from 'next/router'
import React from 'react'
import { TbArrowBack } from "react-icons/tb";

const BackButton = () => {
    const router=useRouter()
   
  return (
    
    <button onClick={()=>{router.back()}} className='text-[15px] bg-secondary flex items-center  mt-1 font-serif  p-2 rounded-e-full hover:bg-Primary hover:transition-all ease-in-out'>Back <TbArrowBack className='text-[17px]' /></button>
  )
}

export default BackButton