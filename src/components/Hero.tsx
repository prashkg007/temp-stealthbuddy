import React, { useState, useEffect } from 'react';
import { ArrowRight, Eye, Shield, Zap, Download as DownloadIcon, Apple, Monitor, Smartphone, Play } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  const [userOS, setUserOS] = useState<string>('');

  useEffect(() => {
    const detectOS = () => {
      const userAgent = window.navigator.userAgent;
      if (userAgent.includes('Win')) return 'Windows';
      if (userAgent.includes('Mac')) return 'macOS';
      if (userAgent.includes('Linux')) return 'Linux';
      return 'Unknown';
    };
    setUserOS(detectOS());
  }, []);

  const downloads = [
    {
      os: 'Windows',
      icon: Monitor,
      version: 'v2.1.0',
      size: '45.2 MB',
      url: '/downloads/stealthbuddy-windows.exe',
      recommended: userOS === 'Windows'
    },
    {
      os: 'macOS',
      icon: Apple,
      version: 'v2.1.0',
      size: '38.7 MB',
      url: '/downloads/stealthbuddy-macos.dmg',
      recommended: userOS === 'macOS'
    },
    {
      os: 'Linux',
      icon: Smartphone,
      version: 'v2.1.0',
      size: '41.3 MB',
      url: '/downloads/stealthbuddy-linux.AppImage',
      recommended: userOS === 'Linux'
    }
  ];

  const handleDownload = (url: string, os: string) => {
    alert(`Download would start for ${os}. File: ${url}`);
  };

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm p-8 rounded-full border border-gray-700/50 group-hover:border-blue-500/50 transition-all">
                <Eye className="h-16 w-16 text-blue-400" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Your <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Invisible</span><br />
            Interview Assistant
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            StealthBuddy helps you ace interviews with AI-powered assistance that remains completely invisible during screen sharing. Get real-time help without being detected.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={onGetStarted}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center space-x-3 transition-all transform hover:scale-105 shadow-2xl shadow-blue-500/25"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-gray-600 hover:border-blue-500 text-white px-10 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center space-x-3 transition-all hover:bg-blue-500/10">
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Download Section - Prominently Featured */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Download <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">StealthBuddy</span>
            </h2>
            <p className="text-lg text-gray-300">Available for all major operating systems</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {downloads.map((download, index) => (
              <div
                key={index}
                className={`group relative bg-gray-800/40 backdrop-blur-xl p-8 rounded-3xl border transition-all duration-500 hover:scale-105 ${
                  download.recommended 
                    ? 'border-blue-500 shadow-2xl shadow-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10' 
                    : 'border-gray-700/50 hover:border-gray-600'
                }`}
              >
                {download.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Recommended for you
                    </div>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gray-700/50 rounded-2xl group-hover:bg-gray-700 transition-colors">
                      <download.icon className="h-12 w-12 text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{download.os}</h3>
                  <p className="text-gray-400 mb-6">{download.version} • {download.size}</p>
                  
                  <button
                    onClick={() => handleDownload(download.url, download.os)}
                    className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-3 ${
                      download.recommended
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl shadow-blue-500/25'
                        : 'border-2 border-gray-600 hover:border-gray-500 text-white hover:bg-gray-700/30'
                    }`}
                  >
                    <DownloadIcon className="h-5 w-5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gray-800/30 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 max-w-3xl mx-auto">
              <h4 className="text-xl font-semibold text-white mb-6">System Requirements</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
                <div className="space-y-2">
                  <p className="font-semibold text-white">Windows</p>
                  <p className="text-sm">Windows 10 or later</p>
                  <p className="text-sm">4GB RAM minimum</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-white">macOS</p>
                  <p className="text-sm">macOS 10.14 or later</p>
                  <p className="text-sm">4GB RAM minimum</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-white">Linux</p>
                  <p className="text-sm">Ubuntu 18.04+ or equivalent</p>
                  <p className="text-sm">4GB RAM minimum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="group bg-gray-800/30 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
            <Shield className="h-12 w-12 text-green-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-4">100% Invisible</h3>
            <p className="text-gray-400 leading-relaxed">Completely undetectable during screen sharing, video calls, or remote sessions</p>
          </div>
          
          <div className="group bg-gray-800/30 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
            <Zap className="h-12 w-12 text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-4">Real-time AI</h3>
            <p className="text-gray-400 leading-relaxed">Instant responses powered by advanced AI that understands context</p>
          </div>
          
          <div className="group bg-gray-800/30 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
            <Eye className="h-12 w-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-4">Smart Recognition</h3>
            <p className="text-gray-400 leading-relaxed">Understands questions and provides relevant, professional answers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;