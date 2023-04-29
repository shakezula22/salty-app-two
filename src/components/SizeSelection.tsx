function SizeSelection() {
  return (
    <div className="flex pb-5 justify-start">
      <label>
        <input
          id="xs"
          type="radio"
          name="size"
          value="xsmall"
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
          value="small"
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
          value="medium"
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
          value="large"
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
          value=" xlarge"
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
