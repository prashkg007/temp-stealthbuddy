import React from 'react';
import { Download, Play, Shield, Zap } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: Download,
      title: 'Download & Install',
      description: 'Download StealthBuddy for your operating system and complete the quick installation process.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      icon: Play,
      title: 'Launch & Configure',
      description: 'Start the application and configure your preferences. Set up hotkeys and customize AI responses.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      icon: Shield,
      title: 'Enable Stealth Mode',
      description: 'Activate invisible mode before your interview. The app becomes completely undetectable.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '04',
      icon: Zap,
      title: 'Get Real-time Help',
      description: 'During interviews, receive instant AI-powered assistance without anyone knowing.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">It Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get started with StealthBuddy in just 4 simple steps and transform your interview experience.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-y-1/2 opacity-30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:scale-105 text-center">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-6 mt-4 flex justify-center">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${step.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gray-800/30 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready in Under 2 Minutes</h3>
            <p className="text-gray-300 mb-6">
              StealthBuddy is designed for quick setup so you can focus on what matters - acing your interview.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>No registration required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Works offline</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Instant activation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;