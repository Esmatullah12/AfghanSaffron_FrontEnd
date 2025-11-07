import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaRegStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Aisha Rahmani",
    review:
      "The aroma and color of this saffron is unlike anything I've bought before. Pure and authentic!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
    rating: 5,
    role: "Café Owner",
  },
  {
    id: 2,
    name: "Chef Lorenzo",
    review:
      "Our desserts have elevated in taste and presentation since using this saffron. Highly recommend!",
    image: "https://static.vecteezy.com/system/resources/previews/060/231/338/non_2x/classic-chef-profile-illustration-with-hat-and-mustache-ideal-for-culinary-designs-vector.jpg",
    rating: 5,
    role: "Michelin Chef",
  },
  {
    id: 3,
    name: "Nisha Patil",
    review:
      "Packaging is premium, saffron strands are thick and fresh. Worth every penny!",
    image: "https://www.shutterstock.com/image-photo/indian-shop-keeper-grocery-store-260nw-2503621023.jpg",
    rating: 4,
    role: "Home Baker",
  },
  {
    id: 4,
    name: "Akmad",
    review:
      "Packaging is premium, saffron strands are thick and fresh. Worth every penny!",
    image: "https://s3.amazonaws.com/media.mixrank.com/profilepic/4617fd477557681df88c34c2e462ff25",
    rating: 4,
    role: "Home Baker",
  }
];


const Testimonial: React.FC = () => {
  const renderStars = (count: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <FaRegStar
        key={i}
        className={`text-yellow-500 text-xl ${
          i < count ? "opacity-100" : "opacity-40"
        }`}
      />
    ));

  return (
    <section className="py-20 bg-[#FFF8E6]">
      <h2 className="text-center text-4xl font-bold text-[#C78200] mb-12">
        What Our Customers Say
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto px-6"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col h-full border border-gray-100">
              {/* Quote mark */}
              <div className="text-[#5A00A3] text-6xl font-bold mb-4">”</div>

              {/* Review */}
              <p className="text-gray-800 text-lg font-medium leading-relaxed flex-grow">
                {t.review}
              </p>

              {/* Stars */}
              <div className="flex mt-6">{renderStars(t.rating)}</div>

              {/* User section */}
              <div className="flex items-center gap-4 mt-8">
                <img
                  src={t.image}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{t.name}</h3>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;