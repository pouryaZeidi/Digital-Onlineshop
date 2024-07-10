import React, { useEffect, useState } from 'react';
import { productType, productResponse } from '@/types/type';
import { useRouter } from 'next/router';
import { getData } from '../../../utils/Fetch';
import BackButton from '../BackButton';

const CategorySelfItem = () => {
  const [item, setItem] = useState<productType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();
  const { slug } = router.query;

  const gatherAllValues = (obj: productResponse): productType[] => {
    return Object.keys(obj).reduce((allValues: productType[], key: string) => {
      return allValues.concat(obj[key]);
    }, []);
  };

  useEffect(() => {
    const categori = async () => {
      if (slug && slug.length === 3) {
        const category = slug[1];
        const itemId = slug[2];

        setLoading(true);
        try {
          const response: productResponse = await getData({ url: '/products',setLoading:setLoading,setError:setError });
          const ProductList = gatherAllValues(response);
          const foundItem = ProductList.find((item) => item.id.toString() === itemId);
          setItem(foundItem || null);
        } catch (error) {
          setError(true);
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    };

    categori();
  }, [slug]);

  return (
    <>
     <div className='ml-5'>
        <BackButton/>
      </div>
    <div className='border bg-custom-gradient m-auto mt-3'>
      {item ? (
        <div className=' m-auto w-[60%]  flex flex-col items-center justify-center  '>
          <div className='md:flex md:justify-center md:w-[75%] '>
          <img src={item.img} alt={item.name} className='border rounded-3xl mr-2 bg-yellow-200 mt-5' />
          <img src={item.img2} alt={item.name} className='border rounded-3xl bg-yellow-200 mt-5' />
          </div>
          
          <h2 className='border bg-yellow-200 rounded-2xl mt-2 sm:text-2xl md:text-5xl font-serif p-3'>{item.name}</h2>
          <h3 className='border bg-yellow-200 rounded-2xl mt-2 sm:text-2xl md:text-5xl font-serif p-3'>{item.title}</h3>
          <p className='border bg-yellow-200 rounded-2xl mb-3  mt-2 sm:text-2xl md:text-5xl font-serif p-3'>{item.price}</p>
        </div>
        
      ) : (
        
        <p>Error</p>
      )}
    </div>
      </>
  );
};

export default CategorySelfItem;
