'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

type CartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
};

type CartContext = {
  getItemQuantity: (id: number, size: string) => number;
  increaseCartQuantity: (product: CartItem) => void;
  decreaseCartQuantity: (id: number, size: string) => void;
  removeFromCart: (id: number, size: string) => void;
  cartItems: CartItem[];
};

const CartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getItemQuantity = (id: number, size: string) => {
    return (
      cartItems.find(item => item.id === id && item.size === size)?.quantity ||
      0
    );
  };

  const increaseCartQuantity = (product: CartItem) => {
    setCartItems(currItems => {
      if (
        currItems.find(
          item => item.id === product.id && item.size === product.size
        ) == null
      ) {
        return [...currItems, { ...product, quantity: 1 }];
      } else {
        return currItems.map(item => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: item.quantity + product.quantity };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number, size: string) => {
    setCartItems(currItems => {
      if (
        currItems.find(item => item.id === id && item.size === size)
          ?.quantity === 1
      ) {
        return currItems.filter(item => item.id !== id);
      } else {
        return currItems.map(item => {
          if (item.id === id && item.size === size) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number, size: string) => {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id && item.size !== size);
    });
  };

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
