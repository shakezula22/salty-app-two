import { DUMMY_ITEMS } from '@/data/dummyItems';
import Link from 'next/link';

function ProductsPage() {
  return (
    <>
      <div className="ml-32 2xl:ml-40 my-6">
        <h1 className="font-bold text-2xl">Shop All</h1>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10 w-4/5">
          {DUMMY_ITEMS.map(item => (
            <Link
              href={`/products/${item.id}`}
              className=" flex flex-col justify-start"
            >
              <img
                className="w-[186px] md:w-[232px] h-[286px] md:h-[357px] object-cover "
                src={item.image}
              />
              <p className="mt-2 font-bold ">{item.title}</p>
              <p className="my-2">${item.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
