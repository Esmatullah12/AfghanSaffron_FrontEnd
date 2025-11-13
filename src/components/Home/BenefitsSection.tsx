import { benefits } from "../../data/benefits";
import type { Benefit } from "../../data/benefits";

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="mb-10 font-display font-semibold text-primary text-4xl">
          Benefits We Provide
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit: Benefit, index) => (
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
