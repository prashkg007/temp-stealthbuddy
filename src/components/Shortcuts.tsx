import React from 'react';
import { Keyboard, Command, MousePointer, Eye } from 'lucide-react';

const Shortcuts: React.FC = () => {
  const shortcuts = [
    {
      category: 'Quick Actions',
      icon: Keyboard,
      color: 'from-blue-500 to-cyan-500',
      shortcuts: [
        { key: 'Ctrl + Shift + A', action: 'Activate StealthBuddy', description: 'Toggle the AI assistant on/off' },
        { key: 'Ctrl + Shift + H', action: 'Hide/Show Interface', description: 'Instantly hide the interface' },
        { key: 'Ctrl + Shift + R', action: 'Quick Response', description: 'Get instant AI response' },
        { key: 'Ctrl + Shift + C', action: 'Copy Last Response', description: 'Copy AI response to clipboard' }
      ]
    },
    {
      category: 'AI Controls',
      icon: Command,
      color: 'from-purple-500 to-pink-500',
      shortcuts: [
        { key: 'Ctrl + Shift + 1', action: 'Technical Questions', description: 'Switch to technical mode' },
        { key: 'Ctrl + Shift + 2', action: 'Behavioral Questions', description: 'Switch to behavioral mode' },
        { key: 'Ctrl + Shift + 3', action: 'Code Review Mode', description: 'Activate code analysis' },
        { key: 'Ctrl + Shift + S', action: 'Smart Suggestions', description: 'Get contextual suggestions' }
      ]
    },
    {
      category: 'Stealth Features',
      icon: Eye,
      color: 'from-green-500 to-emerald-500',
      shortcuts: [
        { key: 'Ctrl + Shift + I', action: 'Invisible Mode', description: 'Complete invisibility toggle' },
        { key: 'Ctrl + Shift + M', action: 'Minimize All', description: 'Hide all StealthBuddy windows' },
        { key: 'Ctrl + Shift + P', action: 'Panic Mode', description: 'Emergency hide everything' },
        { key: 'Ctrl + Shift + T', action: 'Transparency', description: 'Adjust window transparency' }
      ]
    },
    {
      category: 'Mouse Controls',
      icon: MousePointer,
      color: 'from-orange-500 to-red-500',
      shortcuts: [
        { key: 'Double Click Corner', action: 'Quick Access', description: 'Access AI in screen corner' },
        { key: 'Right Click + Hold', action: 'Context Menu', description: 'Show stealth context menu' },
        { key: 'Middle Click', action: 'Screen Capture', description: 'Capture question for AI' },
        { key: 'Scroll + Ctrl', action: 'Zoom Interface', description: 'Adjust interface size' }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Keyboard <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Shortcuts</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master these shortcuts to use StealthBuddy like a pro. Lightning-fast access to all features without detection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {shortcuts.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800/40 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} bg-opacity-20`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.shortcuts.map((shortcut, index) => (
                  <div
                    key={index}
                    className="group flex items-center justify-between p-4 bg-gray-700/30 rounded-2xl hover:bg-gray-700/50 transition-all"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <div className="flex items-center space-x-1">
                          {shortcut.key.split(' + ').map((key, keyIndex) => (
                            <React.Fragment key={keyIndex}>
                              {keyIndex > 0 && <span className="text-gray-500 text-sm">+</span>}
                              <kbd className={`px-2 py-1 text-xs font-semibold text-white bg-gradient-to-r ${category.color} rounded-lg shadow-sm`}>
                                {key}
                              </kbd>
                            </React.Fragment>
                          ))}
                        </div>
                        <span className="text-white font-medium">{shortcut.action}</span>
                      </div>
                      <p className="text-sm text-gray-400">{shortcut.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl p-8 rounded-3xl border border-blue-500/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Pro Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Customize all shortcuts in settings to match your workflow</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Practice shortcuts before interviews for muscle memory</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Use panic mode if you need to hide everything instantly</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Mouse controls work even when keyboard shortcuts are disabled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shortcuts;