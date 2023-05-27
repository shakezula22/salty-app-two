'use client';
import { NavBar } from '@/components/NavBar';
import { useCart } from '../store/cart-context';
import { CartItem } from './CartItem';

export default function Cart() {
  const { cartItems } = useCart();
  console.log(cartItems);
  return (
    <div>
      <NavBar />
      <div className="border-b border-gray-300 mt-5 my-5 mx-2">
        <h1 className="text-2xl">Your Cart</h1>
        {cartItems.map(item => (
          <CartItem key={`${item.id}-${item.size}`} {...item} />
        ))}
      </div>
    </div>
  );
}
