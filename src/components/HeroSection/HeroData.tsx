import { useEffect, useState } from 'react';
import { getData } from '../../../utils/Fetch';
import { productResponse, productType } from '@/types/type';
import CarouselComponent from '../Carousel/CarouselComponent';
import CarouselHeroItem from './CarouselHeroItem';

const HeroData = () => {
  const [items, setItems] = useState<productType[] | null >(null);
  const [loading , setLoading] = useState<boolean>(false)
  const [error , setError] = useState<boolean>(false)
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }

  }

  const gatherAllValues = (obj: productResponse) : productType[]  => {
    return Object.keys(obj).reduce((allValues: productType[], key: string) =>
       {return allValues.concat(obj[key])}, []);
  };
    useEffect(() => {
        const x = async () =>{
            try {
                const response = await getData({url:'/products',setLoading:setLoading,setError:setError})
                console.log(response)
                setItems(gatherAllValues(response)) 
            } catch (error) {
                console.log(error)
            }
        }
        x()
  }, []);

  return (
    <div className="flex">
        {items ? (
            <CarouselComponent data={items} Component={CarouselHeroItem} newResponsive={responsive} />
        ) : (
            <span>Loading...</span>
            
        )}
    </div>
);
};

export default HeroData;
