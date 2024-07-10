
import React from 'react';
import { Categoriesprops, productType } from '@/types/type';
import Link from 'next/link';

const CategoriesItem: React.FC<Categoriesprops > = ({ item, specialData }) => {
  return (
    <Link href={`/products/${specialData}/${item.id}`} className="product-details p-3 rounded-3xl mt-7  bg-opacity-10 ">
      <div key={item.id} className='flex justify-around  items-center w-full m-auto '>
          <div className='w-[100%] flex justify-around relative rounded-2xl  '>
          <img src={item.img}
           className='w-[90%] h-[350px] my-2 object-cover object-center rounded-2xl cursor-pointer  hover:opacity-70' />
           </div>
          <div className='min-w-[25%] h-[35%] absolute  left-7 bottom-10 '>
            <div className=' absolute sm:left-7 left-5  bottom-0 text-nowrap  ' >
              <h2 className='my-0 text-Primary text-[15px]   cursor-pointer hover:text-secondary hover:bg-Primary transition-shadow 0.6s ease-in-out   sm:text-[21px] sm:left-3 md:text-[26px] lg:text-[26px] text-wrap p-1 border bg-opacity-50 bg-yellow-200 rounded-xl font-serif'>{item.name}</h2>
              <h3 className='my-1 text-Primary text-[12px]   cursor-pointer hover:text-secondary hover:bg-Primary transition-shadow 0.6s ease-in-out   sm:text-[18px] sm:left-3 md:text-[24px] lg:text-[24px] p-1 border bg-opacity-50 bg-yellow-200 rounded-xl font-serif' >{item.title}</h3>
              <p  className='my-1 text-Primary text-[17px]   cursor-pointer hover:text-secondary hover:bg-Primary transition-shadow 0.6s ease-in-out   sm:text-[22px] md:text-[28px] lg:text-[27px] p-1 border bg-opacity-50 bg-yellow-200 rounded-xl font-serif'>Price:{item.price}</p>
          </div>
          </div>
      </div>
    </Link>
  );
};

export default CategoriesItem;
