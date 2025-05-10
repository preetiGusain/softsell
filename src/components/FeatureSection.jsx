import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeatureCard = ({ title, description, bgColor }) => (
  <div className={`rounded-2xl p-6 shadow-md ${bgColor} text-left w-full md:w-1/3`}> 
    <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-sm text-gray-700 mb-4">{description}</p>
    <a href="#" className="text-violet-600 font-semibold flex items-center gap-1">
      Learn more <ArrowRight size={16} />
    </a>
  </div>
);

const FeatureSection = () => {
  return (
    <div className="w-full py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-orange-50">
      <div className="max-w-screen-lg mx-auto text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-12">
          Softsell. <br /> One Solution <br /> <span className="text-blue-900">to Sell Them All.</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          <FeatureCard
            title="Automate Your Billing"
            description="Tailor your billing and automate invoicing workflows to fit your unique business needs."
            bgColor="bg-purple-100"
          />
          <FeatureCard
            title="Sell Without Worry"
            description="Prevent fraud, manage chargebacks, and stay compliant — all in one place."
            bgColor="bg-orange-100"
          />
          <FeatureCard
            title="Developer-Friendly Checkouts"
            description="Whether you're code-savvy or prefer a no-code approach, we can help."
            bgColor="bg-blue-100"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
