import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaRegStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import api from "../../../api/axiosInstance";

interface review{
  id: number,
  userProfileImg: string,
  fullName: string,
  userJobTitle: string,
  rating: number,
  comment: string,
  date: string,
}


const Testimonial: React.FC = () => {
  const [reviews, setReviews] = useState<review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserReviews = async() =>{
      try{
        const res = await api.get<review[]>("api/Review/topReviews");
        setReviews(res.data);
        setLoading(false)
      }catch(err){
        console.log("error fetching user reviews", err);
      }finally{
        setLoading(false);
      }
    };
    fetchUserReviews();
  },[])

  const renderStars = (count: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <FaRegStar
      key={i}
      className={`text-yellow-500 text-xl ${
        i < count ? "opacity-100" : "opacity-40"
      }`}
      />
    ));
    
  if(loading){
    return(
      <div>Loading...</div>
    )
  }
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="font-display font-semibold text-primary text-center text-4xl mb-12">
        What Our Customers Say
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        className="max-w-6xl"
      >
        {reviews.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="p-8 md:p-4 mb-6">
              <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col h-full border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="text-[#5A00A3] text-7xl font-bold mb-4 leading-none">”</div>

                <p className="text-gray-800 text-lg font-medium leading-relaxed grow">
                  {t.comment}
                </p>

                <div className="flex mt-6">{renderStars(t.rating)}</div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={t.userProfileImg}
                    alt={t.fullName}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-purple-100"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{t.fullName}</h3>
                    <p className="text-gray-500 text-sm">{t.userJobTitle}</p>
                  </div>
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