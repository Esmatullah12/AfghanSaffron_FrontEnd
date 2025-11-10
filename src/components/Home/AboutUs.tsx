import React from "react";
import Kabul from "../../assets/afg.svg"; 

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="bg-white py-16">
     <div className=" max-w-6xl mx-auto px-6 text-center  px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2">
        <img src={Kabul} alt="Saffron Fields" className="rounded-2xl w-full object-cover" /> 
        </div>

      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#44155B] mb-6">
          About <span className="text-[#CFA45C]">Our Saffron</span>
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our journey began in the heart of Herat, where saffron has been
          cultivated for centuries. We are passionate about preserving this
          golden heritage by bringing you saffron that is pure, ethically
          harvested, and hand-picked with love.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Each delicate thread of our saffron is carefully selected from the
          finest crocus flowers, dried naturally to maintain its rich aroma and
          vibrant color. We ensure that every package embodies luxury, purity,
          and authenticity — directly from our farms to your kitchen.
        </p>
        <div className="mt-8">
          <button className="bg-[#44155B] text-white px-8 py-3 rounded-full hover:bg-[#5E217D] transition duration-300 shadow-md">
            Discover Our Story
          </button>
        </div>
      </div>
     </div>
    </section>
  );
};

export default AboutUs;
