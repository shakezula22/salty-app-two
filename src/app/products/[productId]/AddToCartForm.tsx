'use client';

import { useCart } from '@/app/store/cart-context';

import SizeSelection from '@/app/products/[productId]/SizeSelection';
import React, { useState } from 'react';

type CartProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function AddToCartForm(props: CartProps) {
  const { increaseCartQuantity } = useCart();
  const [addQuantity, setAddQuantity] = useState(1);
  const [addSize, setAddSize] = useState('');

  console.log(props);

  const setSizeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setAddSize(event.currentTarget.value);
  };

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();

    increaseCartQuantity({
      ...props,
      quantity: addQuantity,
      size: addSize,
    });
  };

  return (
    <form onSubmit={submitFormHandler} className="md:col-start-2">
      <div className="py-5 border-b border-gray-300">
        <SizeSelection onSelectSize={setSizeHandler} />
        <div className="my-3">
          <label className="block my-6">
            Qty
            <select
              id="quantity"
              value={addQuantity}
              onChange={event => setAddQuantity(+event.target.value)}
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
  );
}
