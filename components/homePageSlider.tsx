"use client";
import { CarouselProps } from "@/utils/types";
import { useState, useEffect } from "react";

const HomePageSlider = ({
  slides,
  autoSlide = false,
  slideInterval = 5000,
}: CarouselProps) => {
  const [active, setActive] = useState(0);

  const prevSlide = () => {
    setActive((active + slides.length - 1) % slides.length);
  };

  const nextSlide = () => {
    setActive((active + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, slideInterval);
    return () => clearInterval(interval);
  }, [nextSlide, slideInterval]);

  return (
    <div className="h-full relative">
      <div className="h-full overflow-hidden">
        <div className="h-full flex transition-transform duration-500 ease-in-out">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="inline-block w-full"
              style={{
                transform:
                  active === index ? "translateX(0)" : "translateX(-100%)",
              }}
            >
              <div className="w-full h-full bg-[url('/images/2.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="absolute bottom-20 left-20 z-2 w-80 border-l-2 border-b-2 pb-5 pl-5">
                  <h3 className="font-bold">felan</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur
                    <br className="hidden md:inline" />
                    adipisicing elit Quisquamvoluptatibus.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-y-1/2 flex items-center justify-between w-full px-3">
        <button onClick={prevSlide}>&#8592;</button>
        <button onClick={nextSlide}>&#8594;</button>
      </div>
    </div>
  );
};

export default HomePageSlider;
