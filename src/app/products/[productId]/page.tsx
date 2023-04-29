'use client';

import SizeSelection from '@/components/SizeSelection';
import { DUMMY_ITEMS } from '@/data/dummyItems';
import React, { useEffect, useState } from 'react';

type Props = {
  params: {
    productId: string;
  };
};

type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

const fetchData = async (id: number) => {
  return DUMMY_ITEMS.find(item => id === item.id);
};

function ProductDetailPage({ params }: Props) {
  const [product, setProduct] = useState<Product | null>();

  useEffect(() => {
    const res = fetchData(+params.productId);
    res.then(item => setProduct(item));
  }, []);

  if (!product) throw new Error('Product not found');

  return (
    <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:row-span-3 mr-4">
        <img src={product?.image} />
      </div>
      <div className="mt-0 pb-4 row-start-1 md:col-start-2">
        <h1 className="text-4xl">{product?.title}</h1>
      </div>
      <div className="py-2 md:col-start-2 md:row-start-1 md:px-2 md:mt-10">
        <p className="text-xl">${product?.price}</p>
      </div>
      <form className="md:col-start-2">
        <div className="py-5 border-b border-gray-300">
          <SizeSelection />
          <div className="my-3">
            <label className="block my-6">
              Qty
              <select
                id="quantity"
                className="border border-gray-300 rounded py-2 px-4 mx-2"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </label>
          </div>
          <button
            type="submit"
            className="bg-amber-900 w-full max-w-[480px] my-4 h-11 text-white shadow-md  hover:bg-white hover:text-amber-900 hover:font-bold hover:border-2 border-amber-900"
          >
            ADD TO CART
          </button>
        </div>
      </form>
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
          <p className="pt-4">{product?.description}</p>
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
            their country's duties and fees.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
