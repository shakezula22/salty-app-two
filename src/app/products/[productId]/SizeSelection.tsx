'use client';

import React from 'react';

type Props = {
  onSelectSize: (event: React.FormEvent<HTMLInputElement>) => void;
};

function SizeSelection({ onSelectSize }: Props) {
  return (
    <div className="flex pb-5 justify-start">
      <label>
        <input
          id="xs"
          type="radio"
          name="size"
          value="xs"
          onChange={onSelectSize}
          className="appearance-none peer/xs"
        />
        <span className=" p-3 m-3 bg-gray-100 peer-checked/xs:border border-black">
          XS
        </span>
      </label>
      <label>
        <input
          type="radio"
          name="size"
          value="s"
          onChange={onSelectSize}
          className="appearance-none peer/sm"
        />
        <span className=" py-3 px-4 m-3 bg-gray-100 peer-checked/sm:border border-black">
          S
        </span>
      </label>
      <label>
        <input
          type="radio"
          name="size"
          value="m"
          onChange={onSelectSize}
          className="appearance-none peer/md"
        />
        <span className=" py-3 px-4 m-3 bg-gray-100 peer-checked/md:border border-black">
          M
        </span>
      </label>
      <label>
        <input
          type="radio"
          name="size"
          value="l"
          onChange={onSelectSize}
          className="appearance-none peer/lg"
        />
        <span className=" py-3 px-4 m-3 bg-gray-100 peer-checked/lg:border border-black">
          L
        </span>
      </label>
      <label>
        <input
          type="radio"
          name="size"
          value=" xl"
          onChange={onSelectSize}
          className="appearance-none peer/xl"
        />
        <span className=" p-3 m-3 bg-gray-100 peer-checked/xl:border border-black">
          XL
        </span>
      </label>
    </div>
  );
}

export default SizeSelection;
