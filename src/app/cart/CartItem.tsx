import { useCart } from '../store/cart-context';

type CartItemProps = {
  id: number;
  quantity: number;
  name: string;
  description: string;
  price: number;
  thumbnail: { url: string };
  size: string;
};

export function CartItem(item: CartItemProps) {
  return (
    <>
      <section>
        <div className="grid grid-cols-3 gap-x-3 md:grid-cols-4 mx-2 py-5 border-b border-gray-300">
          <div className="flex justify-center">
            <img className="w-2/3" src={item.thumbnail.url} />
          </div>

          <div className="">
            <h2>{item.name}</h2>
            <p>${(item.price / 100).toFixed(2)}</p>
            <p>{item.size}</p>
          </div>
          <div className="col-start-2 md:col-start-3">
            <label htmlFor="quantity" className="block">
              Qty
            </label>
            <input
              id="quantity"
              value={item.quantity}
              className="border border-gray-300 rounded py-2 px-3 w-2/3 max-w-[85px]"
            ></input>
          </div>

          <div className=" flex content-end flex-col text-end col-start-3 row-start-1 md:col-start-4">
            <h2 className="font-bold">Total</h2>
            <h2>${((item.price * item.quantity) / 100).toFixed(2)}</h2>
          </div>
        </div>
      </section>
    </>
  );
}
