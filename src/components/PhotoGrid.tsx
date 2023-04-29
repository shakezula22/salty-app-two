import Carousel from '@/components/Carousel';

function PhotoGrid() {
  return (
    <div className="flex justify-center my-4">
      <div className="grid grid-cols-3 gap-2 w-full">
        <div className="col-span-2 max-h-[700px]">
          <Carousel />
        </div>

        <div className="relative col-span-1 ">
          <img
            className="object-cover h-full hover:opacity-60 peer/dress overflow-hidden"
            src="https://cdn.shopify.com/s/files/1/0002/6420/8396/products/image_db140ab9-eb62-4a14-bb50-6b1956405c2f_1024x1024@2x.jpg?v=1680869638"
          />
          <h2 className="absolute bottom-5 left-1 text-xl md:text-5xl text-white font-bold peer-hover/dress:text-amber-900">
            Dresses & Rompers
          </h2>
        </div>
        <div className="relative">
          <img
            className="object-cover h-full hover:opacity-60 peer/tops overflow-hidden"
            src="https://cdn.shopify.com/s/files/1/0002/6420/8396/products/image_883812f5-bd91-4df7-b7b0-e5fcffb3bc6f_1024x1024@2x.jpg?v=1680863975"
          />
          <h2 className="absolute bottom-5 left-1 text-xl md:text-5xl text-white font-bold peer-hover/tops:text-amber-900">
            Tops
          </h2>
        </div>
        <div className="col-span-1 relative">
          <img
            className="object-cover h-full hover:opacity-60 peer/bottoms overflow-hidden"
            src="https://cdn.shopify.com/s/files/1/0002/6420/8396/products/ScreenShot2022-10-25at12.36.14PM_1080x.png?v=1666715895"
          />
          <h2 className="absolute bottom-5 left-1 text-xl md:text-5xl text-white font-bold peer-hover/bottoms:text-amber-900">
            Bottoms
          </h2>
        </div>
        <div className="col-span-1 relative">
          <img
            className="object-cover h-full w-full hover:opacity-60 peer/access overflow-hidden"
            src="https://cdn.shopify.com/s/files/1/0002/6420/8396/products/Feather_1024x1024@2x.jpg?v=1621871705"
          />
          <h2 className="absolute bottom-5 left-1 text-xl md:text-5xl text-white font-bold peer-hover/access:text-amber-900">
            Accessories
          </h2>
        </div>
      </div>
    </div>
  );
}

export default PhotoGrid;
