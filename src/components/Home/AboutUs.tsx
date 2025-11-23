import React from "react";
import Kabul from "../../assets/aboutUs.png";
import Button from "../common/Button";

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="relative bg-white py-0 overflow-hidden mb-20">

      {/* MOBILE + TABLET BACKGROUND IMAGE */}
      <div
        className="
          lg:hidden 
          relative w-full 
          h-[550px] sm:h-[600px] md:h-[650px]
          bg-cover bg-center bg-no-repeat
        "
        style={{ backgroundImage: `url(${Kabul})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content on Mobile */}
        <div className="relative z-10 px-6 pt-16 text-white">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            About Our Saffron
          </h2>

          <p className="leading-relaxed mb-5">
            Our journey began in the heart of Herat, where saffron has been
            cultivated for centuries. We are passionate about preserving this
            golden heritage by bringing you saffron that is pure, ethically
            harvested, and hand-picked with love.
          </p>

          <p className="leading-relaxed mb-5">
            Each delicate thread of our saffron is carefully selected from the
            finest crocus flowers, dried naturally to maintain its rich aroma and
            vibrant color. We ensure that every package embodies luxury, purity,
            and authenticity — directly from our farms to your kitchen.
          </p>

          <p className="leading-relaxed mb-5">
            With generations of expertise, we preserve the essence of Afghanistan’s
            red gold with unmatched quality and care.
          </p>

          <Button text="Discover Our Story" className="border border-secondary"/>
        </div>
      </div>

      {/* DESKTOP VERSION (UNCHANGED) */}
      <div className="hidden lg:block bg-white py-16">
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
                <h2 className="font-display text-4xl font-bold text-primary mb-6">
                  About Our Saffron
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

                <p className="text-gray-800 leading-relaxed mb-6">
                  With generations of expertise, we preserve the essence of Afghanistan’s
                  red gold with unmatched quality and care.
                </p>

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
