
"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
];

export default function MonCarousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [
      Autoplay({
        delay: 3500,
        stopOnInteraction: false,
      }),
    ]
  );

  return (
    <div
      className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl"
      ref={emblaRef}
    >
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={image}
            className="min-w-0 flex-[0_0_100%]"
          >
            <img
              src={image}
              alt={`Présentation de Fluno ${index + 1}`}
              className="h-[2O0px] w-full object-cover sm:h-[300px] md:h-[460px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
