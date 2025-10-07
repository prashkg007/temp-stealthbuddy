import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Shortcuts from './components/Shortcuts';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import UserProfile from './components/UserProfile';

interface User {
  id: string;
  name: string;
  email: string;
  plan: 'free' | 'pro' | 'enterprise';
  subscriptionStatus: 'active' | 'inactive' | 'cancelled';
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleLogin = (userData: User) => {
    setUser(userData);
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setUser(null);
    setShowProfile(false);
  };

  const handleSignup = () => {
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header 
        user={user} 
        onLogin={() => setShowAuthModal(true)}
        onProfile={() => setShowProfile(true)}
        onLogout={handleLogout}
      />
      
      {!showProfile ? (
        <>
          <Hero onGetStarted={handleSignup} />
          <HowItWorks />
          <Shortcuts />
          <Features />
          <Pricing onSelectPlan={handleSignup} />
          <Footer />
        </>
      ) : (
        <UserProfile 
          user={user} 
          onBack={() => setShowProfile(false)}
          onUpdateUser={setUser}
        />
      )}

      {showAuthModal && (
        <AuthModal 
          onClose={() => setShowAuthModal(false)}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
}

export default App;