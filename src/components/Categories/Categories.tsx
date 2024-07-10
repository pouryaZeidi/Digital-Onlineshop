import React, { useEffect, useState } from 'react';
import { getData } from '../../../utils/Fetch';
import { productType, productResponse } from '@/types/type';
import CarouselComponent from '../Carousel/CarouselComponent';
import CategoriesItem from './CategoriesItem';
import 'react-multi-carousel/lib/styles.css';

interface CategoryCarouselProps {
  category: string;
}

const Categories: React.FC<CategoryCarouselProps> = ({ category }) => {
  const [items, setItems] = useState<productType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  useEffect(() => {
    const data = async () => {
      try {
        const response = await getData({ url: `/products`, setLoading, setError });
        setItems(response[category]);
      } catch (error) {
        console.log(error);
      }
    };
    data();
  }, [category]);

  
  {error ?<p>Error</p>: null}
  {loading ?<p>loading...</p>: null}

  return (
    <div className="flex flex-col items-center">
      {items ? (
        <CarouselComponent data={items}  Component={CategoriesItem} newResponsive={responsive} specialData={category} />
      ) : (
        <span>Error</span>
      )}
    </div>
  );
};

export default Categories;
