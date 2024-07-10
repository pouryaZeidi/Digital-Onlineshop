import { useEffect, useState } from 'react';
import { productResponse, productType } from '@/types/type';
import { getData } from '../../../utils/Fetch';
import { useRouter } from 'next/router';
import Link from 'next/link';
import BackButton from '../BackButton';

const ProductList = ({ item, type }: any) => {
  const [items, setItems] = useState<productType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();

  const gatherAllValues = (obj: productResponse): productType[] => {
    return Object.keys(obj).reduce((allValues: productType[], key: string) => {
      return allValues.concat(obj[key]);
    }, []);
  };

  useEffect(() => {
    const products = async () => {
      setLoading(true);
      try {
        const response = await getData({ url: '/products', setLoading, setError });
        if (router.query.slug && router.query.slug.length === 1) {
          setItems(gatherAllValues(response));
        } else {
          const data = router.query.slug ? response[router.query.slug[1]] : [];
          setItems(data);
        }
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    products();
  }, [router.query.slug]);

  return (
    <>
      <div className='ml-5'>
        <BackButton/>
      </div>
      <div className="flex flex-wrap justify-center">
        {items.map((item) => (
          <Link key={item.id} href={`/products/${type}/${item.id}`} className="p-4 m-auto sm:m-2 md:ml-5 mt-5 border h-80 bg-custom-gradient bg-opacity-15 rounded-2xl">
            <div className="rounded-2xl h-full">
              <img
                src={item.img}
                alt={item.name}
                className="rounded-lg w-40 h-40 object-cover cursor-pointer transform transition-transform hover:scale-110"/>
              <p className="font-serif my-2">{item.name}</p>
              <h2 className="font-serif my-5">{item.title}</h2>
              <span className="font-serif border p-3 bg-secondary bg-opacity-25 rounded-xl hover:bg-yellow-600">
                {item.price}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="p-2">
        FooterLorem ipsum dolor sit amet, consectetur adipisicing elit. Nam accusantium et quae a aspernatur libero numquam nisi ea nesciunt illo placeat, dolorum ab fugit enim, sequi quaerat eligendi sint! Quibusdam!
      </div>
    </>
  );
};

export default ProductList;
