import React from 'react';
import { Brain, Code, MessageCircle, Monitor, Shield, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Invisible Mode",
      description: "Completely undetectable during screen sharing, video calls, or remote desktop sessions.",
      color: "text-green-400",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Brain,
      title: "AI-Powered Assistance",
      description: "Advanced AI analyzes questions and provides intelligent, context-aware responses.",
      color: "text-blue-400",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Code Solutions",
      description: "Get instant coding solutions, algorithm explanations, and best practices.",
      color: "text-purple-400",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      title: "Smart Responses",
      description: "Receive well-structured answers that sound natural and professional.",
      color: "text-yellow-400",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Monitor,
      title: "Multi-Platform",
      description: "Works seamlessly across Windows, macOS, and Linux operating systems.",
      color: "text-red-400",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get responses in milliseconds with our optimized AI processing engine.",
      color: "text-orange-400",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Success</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            StealthBuddy is packed with advanced features designed to give you the edge in any interview scenario.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-gray-800/40 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-gray-600 transition-all duration-500 group hover:scale-105 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative">
                <div className="mb-6 flex justify-center">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} bg-opacity-10 group-hover:bg-opacity-20 transition-all group-hover:scale-110`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;