import { IoDiamondOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GoVerified } from "react-icons/go";

const benefits = [
  {
    icon: <IoDiamondOutline className="text-5xl" style={{ color: "#44155B" }}/>,
    title: "Premium Quality",
    description:
      "We ensure top-quality products made from the finest materials, designed to meet your expectations.",
  },
  {
    icon: <LiaShippingFastSolid className="text-5xl" style={{ color: "#44155B" }}/>,
    title: "Free Shipping",
    description:
      "Enjoy free and fast delivery on all your orders, right to your doorstep without extra cost.",
  },
  {
    icon: <GoVerified className="text-5xl" style={{ color: "#44155B" }} />,
    title: "Warranty",
    description:
      "We stand by our products with a solid warranty to ensure your complete peace of mind.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Benefits We Provide
        </h2>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl transition-shadow duration-300 hover:shadow-md"
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
