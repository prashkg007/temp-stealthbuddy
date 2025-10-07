import React from 'react';
import { Check, Star } from 'lucide-react';

interface PricingProps {
  onSelectPlan: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for trying out StealthBuddy",
      features: [
        "5 AI responses per day",
        "Basic question recognition",
        "Windows, macOS, Linux support",
        "Community support"
      ],
      popular: false,
      buttonText: "Start Free",
      buttonStyle: "border border-gray-600 hover:border-gray-500 text-white"
    },
    {
      name: "Pro",
      price: "29",
      description: "Best for regular interview preparation",
      features: [
        "Unlimited AI responses",
        "Advanced context understanding",
        "Code completion & debugging",
        "Interview recording analysis",
        "Priority support",
        "Custom response templates"
      ],
      popular: true,
      buttonText: "Start Pro Trial",
      buttonStyle: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
    },
    {
      name: "Enterprise",
      price: "99",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team management dashboard",
        "Custom AI training",
        "Advanced analytics",
        "SSO integration",
        "Dedicated support manager",
        "Custom integrations"
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonStyle: "border border-gray-600 hover:border-gray-500 text-white"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your needs. Start free and upgrade as you grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-800/40 backdrop-blur-xl p-8 rounded-3xl border transition-all duration-500 hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/25 bg-gradient-to-br from-blue-500/5 to-purple-500/5' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={onSelectPlan}
                className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all transform hover:scale-105 ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400">
            All plans include a 14-day free trial. No credit card required for Free plan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;