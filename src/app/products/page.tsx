import { NavBar } from '@/components/NavBar';
import Link from 'next/link';
import env from '../api/env/env';

type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  thumbnail: { url: string };
};

const getItems = async (): Promise<Product[]> => {
  const res = await fetch(
    'https://salty-app.jgude.dev/products?page=1&resultsPerPage=1000&search=armani',
    {
      method: 'GET',
      headers: {
        'x-api-key': env.API_KEY,
      },
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data.');
  }
  const data = await res.json();
  return data.data;
};

async function ProductsPage() {
  const items = await getItems();

  return (
    <>
      <NavBar />
      <div className="ml-32 2xl:ml-40 my-6">
        <h1 className="font-bold text-2xl">Shop All</h1>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10 w-4/5">
          {items.map(item => (
            <Link
              href={`/products/${item.id}`}
              className=" flex flex-col justify-start"
              key={item.id}
            >
              <img
                className="w-[186px] md:w-[232px] h-[286px] md:h-[357px] object-cover "
                src={item.thumbnail.url}
              />
              <p className="mt-2 font-bold ">{item.name}</p>
              <p className="my-2">${(item.price / 100).toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
