"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const backgrounds = [
  "/images/bg-1.jpg",
  "/images/bg-2.jpg",
  "/images/bg-3.jpg",
  "/images/bg-4.jpg",
  "/images/bg-5.jpg"
];

export default function Login() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* Left side - Animated Background Carousel (hidden on mobile) */}
      <div className="hidden lg:block lg:w-3/5 relative overflow-hidden bg-primary">
        {backgrounds.map((bg, index) => (
          <div
            key={bg}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentBg ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          </div>
        ))}
        
        <div className="absolute bottom-12 left-12 right-12 text-white z-10">
          <h2 className="text-4xl font-bold font-heading mb-4 text-white">Empowering Kenyan Farmers</h2>
          <p className="text-lg opacity-90 max-w-xl text-white">
            Manage your crops, track expenses, and increase your yield with data-driven insights tailored for the modern farmer.
          </p>
          
          <div className="flex gap-2 mt-6">
            {backgrounds.map((_, index) => (
              <div 
                key={index} 
                className={`h-1.5 rounded-full transition-all duration-500 ${index === currentBg ? "w-8 bg-primary-light" : "w-4 bg-white/50"}`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center px-8 sm:px-16 xl:px-24 bg-surface relative">
        {/* Mobile Background Fallback */}
        <div 
          className="absolute inset-0 lg:hidden opacity-10"
          style={{
            backgroundImage: `url(${backgrounds[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative z-10 animate-fade-in w-full max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <img src="/logo.png" alt="AgriBloom Logo" className="w-12 h-12 object-contain" />
            <h1 className="text-3xl font-bold font-heading text-primary m-0">AgriBloom</h1>
          </div>

          <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
          <p className="text-muted mb-8">Sign in to your farm manager dashboard.</p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-muted mb-1">Phone Number / Email</label>
              <input 
                type="text" 
                placeholder="e.g. 0712345678" 
                className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <label className="block text-sm font-medium text-muted">Password</label>
                <a href="#" className="text-sm font-medium text-primary hover:text-primary-hover">Forgot?</a>
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              />
            </div>

            <Link href="/" className="btn btn-primary w-full py-3 text-lg mt-4 flex items-center justify-center gap-2 group">
              Sign In
              <svg className="transform group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </form>

          <p className="text-center text-sm text-muted mt-8">
            Don&apos;t have an account? <a href="#" className="text-primary font-bold hover:underline">Register your farm</a>
          </p>
        </div>
      </div>
    </div>
  );
}
