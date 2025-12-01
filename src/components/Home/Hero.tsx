import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import api from "../../api/axiosInstance";

interface Slide{
  id:number,
  title:string,
  description:string,
  imageUrl:string
}

const Hero: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await api.get("api/Slider/list");
        setSlides(response.data);
      }catch(error){
        console.error('Error fetching slides:', error);
      }
    }
    fetchSlides();
  }, [])

  const baseUrl = import.meta.env.VITE_API_URL;
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full">
            <div className="absolute inset-0">
              <img
                src={`${baseUrl}/${slide.imageUrl}`}
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
                {slide.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
