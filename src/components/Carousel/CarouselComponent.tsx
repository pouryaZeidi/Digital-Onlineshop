import { carouselprops, productType } from '@/types/type';
import React, { Children } from 'react'
import Carousel, { CarouselProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselComponent = ({newResponsive,Component,data,specialData}:carouselprops) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
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
      };

  return (
    <Carousel infinite
    responsive={{...responsive, ...newResponsive}}  
    className=' w-[90%] m-auto flex my-5 z-30'>
      {data.map((item:productType)=> <Component item={item} specialData={specialData} />)}
    </Carousel>
  )
}

export default CarouselComponent