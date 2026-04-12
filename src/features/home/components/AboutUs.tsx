import React from "react";
import Kabul from "../../../assets/aboutUs.png";
import Button from "../../../components/ui/Button";
import { useLanguage } from "../../../i18n/LanguageContext";

const AboutUs: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about-us" className="relative bg-white py-0 overflow-hidden">

      <div className="lg:hidden relative w-full h-[550px] sm:h-[600px] md:h-[650px] bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${Kabul})` }}>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-6 pt-16 text-white">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            {t.aboutUs.heading}
          </h2>

          <p className="leading-relaxed mb-5">{t.aboutUs.p1}</p>
          <p className="leading-relaxed mb-5">{t.aboutUs.p2}</p>
          <p className="leading-relaxed mb-5">{t.aboutUs.p3}</p>

          <Button disabled={false} text={t.aboutUs.cta} className="border"/>
        </div>
      </div>

      <div className="hidden lg:block py-16 bg-gray-50">
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
              <div className="w-full backdrop-blur-md bg-white/40 border border-gray-300 rounded-2xl p-8 shadow-2xl mx-auto lg:mx-0">
                <h2 className="font-display text-4xl font-bold text-primary mb-6">
                  {t.aboutUs.heading}
                </h2>

                <p className="text-gray-800 leading-relaxed mb-6">{t.aboutUs.p1}</p>
                <p className="text-gray-800 leading-relaxed mb-6">{t.aboutUs.p2}</p>
                <p className="text-gray-800 leading-relaxed mb-6">{t.aboutUs.p3}</p>

                <Button disabled={false} text={t.aboutUs.cta} />
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;
