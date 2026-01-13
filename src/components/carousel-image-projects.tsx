"use client";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

interface ImageProjectProps {
  images: ImageProps[];
}

interface ImageProps {
  title: string;
  image: string;
}

const SlideCarousel = ({ images }: ImageProjectProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  // Preload das imagens para evitar flicker
  useEffect(() => {
    const imagePromises = images.map((item) => {
      return new Promise((resolve, reject) => {
        const img = new window.Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = item.image;
      });
    });

    Promise.all(imagePromises)
      .then(() => setIsLoaded(true))
      .catch(() => setIsLoaded(true)); // Continua mesmo se alguma imagem falhar
  }, [images]);

  if (!isLoaded) {
    return (
      <div className="relative w-full mx-auto">
        <div className="w-full aspect-[16/9] bg-gray-200 animate-pulse rounded-none flex items-center justify-center">
          <span className="text-gray-400">Carregando...</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full mx-auto"
      aria-live="polite"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="overflow-hidden rounded-none">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((item, index) => (
            <div key={`${item.image}-${index}`} className="w-full flex-shrink-0">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                  className="object-contain"
                  priority={index === 0}
                  quality={85}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botões de navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-none shadow-lg transition-all duration-200 z-10"
        aria-label="Imagem anterior"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-none shadow-lg transition-all duration-200 z-10"
        aria-label="Próxima imagem"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-none transition-all duration-200 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export function Carousel({ images }: ImageProjectProps) {
  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[4/3] bg-gray-100 rounded-none flex items-center justify-center">
        <span className="text-gray-500">Nenhuma imagem disponível</span>
      </div>
    );
  }

  return (
    <div className="w-full">
      <SlideCarousel images={images} />
    </div>
  );
}
