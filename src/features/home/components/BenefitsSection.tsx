import React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GoVerified } from "react-icons/go";
import { useLanguage } from "../../../i18n/LanguageContext";

const benefitIcons = [
  <IoDiamondOutline className="text-5xl text-primary" />,
  <LiaShippingFastSolid className="text-5xl text-primary" />,
  <GoVerified className="text-5xl text-primary" />,
];

const BenefitsSection: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: benefitIcons[0], ...t.benefits.premium },
    { icon: benefitIcons[1], ...t.benefits.shipping },
    { icon: benefitIcons[2], ...t.benefits.warranty },
  ];

  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="mb-16 font-display font-semibold text-primary text-4xl">
          {t.benefits.heading}
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {benefit.icon}
                <h3 className="text-xl font-semibold text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
