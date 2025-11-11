import React from "react";
import Kabul from "../../assets/aboutUs.png";

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="relative bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative flex flex-col lg:flex-row items-center">
          
          {/* Full Background Image - Left Side (70%) */}
       <div className="lg:w-[70%] w-full relative">
          <img
            src={Kabul}
            alt="Saffron Fields"
            className="w-full h-full object-cover rounded-2xl shadow-2xl lg:h-[600px]"
          />
        </div>
          {/* Overlapping Text Box - Positioned on top-right of image */}
          <div className="absolute lg:right-0 lg:w-1/2 w-full lg:ml-8 p-6 lg:p-0">
            <div className="lg:ml-8 backdrop-blur-md bg-white/40 border border-[#44155B] rounded-2xl p-8 shadow-2xl max-w-lg mx-auto lg:mx-0">
              <h2 className="text-3xl md:text-4xl font-bold text-[#44155B] mb-6">
                About <span className="text-[#CFA45C]">Our Saffron</span>
              </h2>
              <p className="text-gray-800 leading-relaxed mb-6">
                Our journey began in the heart of Herat, where saffron has been
                cultivated for centuries. We are passionate about preserving this
                golden heritage by bringing you saffron that is pure, ethically
                harvested, and hand-picked with love.
              </p>
              <p className="text-gray-800 leading-relaxed mb-6">
                Each delicate thread of our saffron is carefully selected from the
                finest crocus flowers, dried naturally to maintain its rich aroma and
                vibrant color. We ensure that every package embodies luxury, purity,
                and authenticity — directly from our farms to your kitchen.
              </p>
              <div className="mt-8">
                <button className="cursor-pointer bg-[#44155B] text-white px-8 py-3 rounded-full hover:bg-[#5E217D] transition duration-300 shadow-md">
                  Discover Our Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;