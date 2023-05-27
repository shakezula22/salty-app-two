import Link from 'next/link';

type headerProps = {
  onLogin: () => void;
};

function Header(props: headerProps) {
  return (
    <div className=" text-amber-900 pt-4 pb-8 min-w-full">
      {/* <div className="flex justify-between">
        <div className="w-32 text-center">
          <p>Search</p>
        </div>
        <div className="flex w-64 justify-around">
          <button onClick={props.onLogin} className="text-center">
            Login
          </button>
          <Link href="/cart" className="text-center">
            Cart
          </Link>
        </div>
      </div> */}
      <header className="flex flex-col items-center">
        <img
          className=" object-cover max-h-64 w-96 rounded-3xl shadow-md"
          src="https://cdn.shopify.com/s/files/1/0002/6420/8396/files/idea_540x.png?v=1670596690"
        />
        <ul className="flex justify-around w-4/5 mt-8 py-4 border-b border-gray-300">
          <li className="w-32 text-center hover:underline-offset-2">
            <Link href="/">Home</Link>
          </li>
          <li className="w-32 text-center">
            <Link href="/products">Shop</Link>
          </li>
          <li>
            <Link href="/cart" className="text-center">
              Cart
            </Link>
          </li>
          <li className="w-32 text-center">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
