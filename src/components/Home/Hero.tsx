// src/components/home/Hero.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

// Images
import SliderImage1 from "../../assets/SliderImage1.svg";
import SliderImage2 from "../../assets/SliderImage2.svg";
import SliderImage3 from "../../assets/SliderImage3.svg";
import SliderImage4 from "../../assets/SliderImage4.svg";

const slides = [
  {
    img: SliderImage1,
    title: "The Crimson Gold of Afghanistan",
    desc: "Deep in the rugged mountains of Herat, where the air is thin and the sun burns golden, master artisans hand-pick each delicate saffron crocus at dawn. Only the finest red stigmas are selected — transformed into threads of pure crimson gold. This is not just saffron. This is nature’s rarest luxury, untouched by machines, delivered to you in its most exalted form.",
  },
  {
    img: SliderImage2,
    title: "A Legacy Woven in Saffron",
    desc: "For over a thousand years, Afghan families have passed down the sacred art of saffron cultivation — from generation to generation, under the same ancient skies. Every harvest tells a story of resilience, precision, and pride. Today, we bring you the very same saffron once reserved for emperors and poets — a living heritage, now gracing your table with timeless elegance.",
  },
  {
    img: SliderImage3,
    title: "Purity in Every Golden Strand",
    desc: "Certified organic, laboratory-tested, and graded Super Negin — the highest standard in the world. No pesticides. No additives. Just pure, vibrant saffron threads that release an intoxicating aroma and a deep, honeyed flavor. Each strand is a promise of absolute purity, hand-inspected and packed with reverence, ensuring you experience saffron exactly as nature intended.",
  },
  {
    img: SliderImage4,
    title: "Elevate Your Table to Royalty",
    desc: "From the sun-drenched valleys of Afghanistan to the world’s finest kitchens, our saffron transforms the ordinary into the extraordinary. A single pinch turns rice into golden paella, tea into liquid sunshine, and desserts into decadent masterpieces. Elevate your culinary creations with the unparalleled richness and depth of Afghan saffron — because every meal deserves a touch of royalty.",
  },
];

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

            {/* Changed alignment classes */}
            <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white px-6 lg:px-24">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
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
