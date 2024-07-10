import React from 'react';
import AllItems from '@/components/products/ProductList';
import { useRouter } from 'next/router';
import CategorySelfItem from '@/components/products/CategorySelfItem';

const Product = () => {
  const router = useRouter();

  return (
    <>
      {router.query.slug && router.query.slug?.length === 3 ? <CategorySelfItem /> : router.query.slug && router.query.slug?.length < 3 ? <AllItems /> : null}
    </>
  );
};

export default Product;
