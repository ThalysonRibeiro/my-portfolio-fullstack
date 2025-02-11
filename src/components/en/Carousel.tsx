"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';


interface ImageProjectProps {
  images: ImageProps[];
}
interface ImageProps {
  title: string;
  image: string;
}

const SlideCarousel = ({ images }: ImageProjectProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((item) => (
            <div key={item.image} className="w-full flex-shrink-0">
              <Image
                width={500}
                height={500}
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow"
      >
        &#10095;
      </button>
    </div>
  );
};

export function Carousel({ images }: ImageProjectProps) {
  return (
    <div className='w-full'>
      <SlideCarousel images={images} />
    </div>
  );
};