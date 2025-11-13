// src/components/home/Hero.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { slides } from "../../data/slides";

import "swiper/css";
import "swiper/css/effect-fade";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={800}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full">
            <div className="absolute inset-0">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white px-6 lg:px-24">
              <h1 className="font-display tracking-normal text-4xl lg:text-6xl font-semibold mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg lg:text-xl max-w-2xl opacity-90 drop-shadow-md">
                {slide.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
