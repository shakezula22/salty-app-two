'use client';

import image1 from '@/images/beach.jpg';
import image2 from '@/images/bohoGrass.jpg';
import image3 from '@/images/strawHat.jpg';

import Image from 'next/image';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const images = [image1, image2, image3];
const slideShow = images.map(image => {
  <div className="min-w-0 flex-[0_0_100%] h-full">
    <Image
      src={image}
      alt="beach slideshow"
      className="opacity-75 object-cover h-full w-full rounded-lg"
    />
  </div>;
});

function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="overflow-hidden h-full" ref={emblaRef}>
      <div className="flex h-full">
        <div className="min-w-0 flex-[0_0_100%] h-full">
          <Image
            src={image1}
            alt="beach picture"
            className="opacity-75 object-cover h-full w-full"
          />
        </div>
        <div className="min-w-0 flex-[0_0_100%] h-full">
          <Image
            src={image2}
            alt="grass picture"
            className="opacity-75 object-cover h-full w-full"
          />
        </div>
        <div className="min-w-0 flex-[0_0_100%] h-full">
          <Image
            src={image3}
            alt="straw hat picture"
            className="opacity-75 object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
