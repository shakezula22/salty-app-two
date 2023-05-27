import Link from 'next/link';

export function NavBar() {
  return (
    <div className="flex justify-end h-12 w-screen bg-primary border-b border-gray-300">
      <div className="h-full w-11 mr-20">
        <Link href="/">
          <img
            className="object-fill"
            src="https://cdn.shopify.com/s/files/1/0002/6420/8396/files/idea_540x.png?v=1670596690"
          />
        </Link>
      </div>
      <div className="h-full w-5/6">
        <ul className="flex justify-around h-full py-2  text-amber-900">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/cart">Your Cart</Link>
          </li>
          <li>
            <Link href="/products">Shop All</Link>
          </li>
          <li>
            <Link href="/tops">Tops</Link>
          </li>
          <li>
            <Link href="/bottoms">Bottoms</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
