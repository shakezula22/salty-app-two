import env from '@/app/api/env/env';
import AddToCartForm from './AddToCartForm';

type Props = {
  params: {
    productId: string;
  };
};

type Product = {
  id: number;
  name: string;
  description: string;
  thumbnail: { url: string };
  price: number;
};

const fetchData = async (id: number): Promise<Product> => {
  const res = await fetch(`https://salty-app.jgude.dev/products/${id}`, {
    method: 'GET',
    headers: {
      'x-api-key': env.API_KEY,
    },
  });
  const data = await res.json();
  return data;
};

async function ProductDetailPage({ params }: Props) {
  const item = await fetchData(+params.productId);
  return (
    <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:row-span-3 mr-4">
        <img src={item.thumbnail.url} />
      </div>
      <div className="mt-0 pb-4 row-start-1 md:col-start-2">
        <h1 className="text-4xl">{item.name}</h1>
      </div>
      <div className="py-2 md:col-start-2 md:row-start-1 md:px-2 md:mt-10">
        <p className="text-xl">${(item.price / 100).toFixed(2)}</p>
      </div>
      <AddToCartForm {...item} />
      <div className="py-5 md:col-start-2">
        <p>
          $5 Flat rate shipping anywhere in the US. Shipping free for orders
          over $100.
        </p>
        <p className="pt-5">In-Store pickup available!</p>
      </div>
      <div className="my-5 py-5 md:col-start-2">
        <div className="border-y border-gray-300 py-5">
          <h2 className="text-lg">Product Description</h2>
          <p className="pt-4">{item.description}</p>
        </div>
        <div className="py-5 border-b border-gray-300">
          <h2 className="text-lg">Shipping & Returns</h2>
          <p className="pt-4">
            We offer a flat rate of $5 per order for domestic shipping.
            International shipping is offered at $20 per order. Shipping is free
            for domestic orders over $100. Shipping (Domestic) - Please allow
            between 1-3 business days once you receive the shipping confirmation
            email. Shipping (International) - Please allow between 6-10 business
            days once you receive the shipping confirmation email. Shipping fee
            does not include customs or duties fees. Customer is responsible for
            their country&apos;s duties and fees.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
