import React from "react";
import Kabul from "../../assets/aboutUs.png";
import Button from "../common/Button";

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="relative bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative flex flex-col lg:flex-row items-center">
          
       <div className="lg:w-[70%] w-full relative">
          <img
            src={Kabul}
            alt="Saffron Fields"
            className="w-full h-full object-cover rounded-2xl shadow-2xl lg:h-[600px]"
          />
        </div>
          <div className="absolute lg:right-0 lg:w-2/3 w-full lg:ml-8 p-6 lg:p-0">
            <div className="w-full backdrop-blur-md bg-white/40 border border-primary rounded-2xl p-8 shadow-2xl mx-auto lg:mx-0">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">About Our Saffron</h2>
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
                            <p className="text-gray-800 leading-relaxed mb-6">
                Each delicate thread of our saffron is carefully selected from the
                finest crocus flowers, dried naturally to maintain its rich aroma and
                vibrant color. We ensure that every package embodies luxury, purity,
                and authenticity — directly from our farms to your kitchen.
              </p>
              <div className="mt-8">
                <Button text="Discover Our Story" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;