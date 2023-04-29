'use client';

import Link from 'next/link';

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="mx-5">
      <div className="flex justify-center py-20">
        <p>Oops! Something went wrong.</p>
      </div>
      <div className="flex justify-center py-18">
        <h1 className="text-4xl">{error.message || 'Page not found.'}</h1>
      </div>
      <div className="flex justify-center py-20">
        <button
          className="bg-amber-900 m-4 px-3 h-11 text-white shadow-md  hover:bg-white hover:text-amber-900 hover:font-bold hover:border-2 border-amber-900"
          onClick={reset}
        >
          Try Again
        </button>
        <Link href="/" passHref>
          <button className="bg-amber-900 m-4 px-3 h-11 text-white shadow-md  hover:bg-white hover:text-amber-900 hover:font-bold hover:border-2 border-amber-900">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default error;
