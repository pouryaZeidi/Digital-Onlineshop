import { productResponse, productType } from '@/types/type'
import React, { useEffect, useState } from 'react'


const CarouselHeroItem = ({item}:{item:any}) => {
  const [loading , setLoading] = useState<boolean>(false)
  const [error , setError] = useState<boolean>(false)

  return (
    <>
      <div key={item.id} className='flex justify-around  items-center w-full m-auto '>
          <div className='w-[100%] flex justify-around relative rounded-2xl  '>
          <img src={item.img2} alt={item.name} 
          className='sm:w-[45%] h-[550px] my-2 object-cover object-center rounded-2xl cursor-pointer hover:opacity-70 ' />
          <img src={item.img}
           className='w-[45%] h-[550px] my-2 object-cover object-center rounded-2xl hidden sm:block cursor-pointer  hover:opacity-70' />
           </div>
          <div className='min-w-[25%] h-[35%] absolute  left-7 bottom-10 '>
            <div className=' absolute sm:left-7 left-3  bottom-0 text-nowrap  ' >
              <h2 className='my-0 text-Primary text-[17px]  cursor-pointer hover:text-secondary hover:bg-Primary sm:text-[23px] md:text-[26px] lg:text-[29px] p-1 border bg-opacity-50 bg-yellow-200 rounded-xl font-serif'>{item.name}</h2>
              <h3 className='my-1 text-Primary text-[14px]  cursor-pointer hover:text-secondary hover:bg-Primary sm:text-[21px] md:text-[24px] lg:text-[27px] p-1 border bg-opacity-50 bg-yellow-200 rounded-xl font-serif' >{item.title}</h3>
              <h3 className='my-0 text-Primary text-[13px]  cursor-pointer hover:text-secondary hover:bg-Primary sm:text-[16px] md:text-[21px] lg:text-[23px] p-1 border bg-opacity-50 bg-yellow-200 rounded-xl font-serif'>Stock:{item.stock} units</h3>
              <p  className='my-1 text-Primary text-[18px]  cursor-pointer hover:text-secondary hover:bg-Primary sm:text-[24px] md:text-[28px] lg:text-[30px] p-1 border bg-opacity-50 bg-yellow-200 rounded-xl font-serif'>Price:{item.price}</p>
          </div>
          </div>
      </div>
    </>
  )
}

export default CarouselHeroItem