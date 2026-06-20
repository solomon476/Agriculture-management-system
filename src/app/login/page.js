"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const backgrounds = [
  "/images/bg-1.jpg",
  "/images/bg-2.jpg",
  "/images/bg-3.jpg",
  "/images/bg-4.jpg",
  "/images/bg-5.jpg"
];

export default function Login() {
  const [currentBg, setCurrentBg] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call and login animation process
    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex relative">
      {/* Mobile & Desktop Background Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-primary lg:relative lg:w-3/5 lg:block">
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
            {/* Dark gradient overlay for text readability and to make the mobile form pop */}
            <div className="absolute inset-0 bg-black/60 lg:bg-gradient-to-t lg:from-black/70 lg:via-black/20 lg:to-transparent"></div>
          </div>
        ))}
        
        {/* Marketing Text - Hidden on mobile, shown on desktop */}
        <div className="hidden lg:block absolute bottom-12 left-12 right-12 text-white z-10">
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
      <div className="w-full lg:w-2/5 flex flex-col justify-center px-6 sm:px-16 xl:px-24 relative z-10 lg:bg-surface">
        
        <div className="relative animate-fade-in w-full max-w-md mx-auto p-8 rounded-2xl lg:p-0 lg:rounded-none bg-white/90 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none shadow-2xl lg:shadow-none border border-white/20 lg:border-none">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
            <img src="/logo.png" alt="AgriBloom Logo" className="w-12 h-12 object-contain drop-shadow-md lg:drop-shadow-none" />
            <h1 className="text-3xl font-bold font-heading text-primary m-0">AgriBloom</h1>
          </div>

          <h2 className="text-2xl font-bold mb-2 text-center lg:text-left text-gray-900 lg:text-inherit">Welcome Back</h2>
          <p className="text-muted mb-8 text-center lg:text-left font-medium lg:font-normal">Sign in to your farm manager dashboard.</p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-bold lg:font-medium text-gray-700 lg:text-muted mb-1">Phone Number / Email</label>
              <input 
                type="text" 
                required
                placeholder="e.g. 0712345678" 
                className="w-full px-4 py-3 rounded-lg border border-border bg-white/80 lg:bg-white focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <label className="block text-sm font-bold lg:font-medium text-gray-700 lg:text-muted">Password</label>
                <a href="#" className="text-sm font-bold text-primary hover:text-primary-hover">Forgot?</a>
              </div>
              <input 
                type="password" 
                required
                placeholder="••••••••" 
                className="w-full px-4 py-3 rounded-lg border border-border bg-white/80 lg:bg-white focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className={`btn btn-primary w-full py-3 text-lg mt-4 flex items-center justify-center gap-2 group relative overflow-hidden ${isLoading ? 'opacity-90 cursor-wait' : ''}`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Authenticating...
                </>
              ) : (
                <>
                  Sign In
                  <svg className="transform group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 lg:text-muted mt-8 font-medium lg:font-normal">
            Don&apos;t have an account? <a href="#" className="text-primary font-bold hover:underline">Register your farm</a>
          </p>
        </div>
      </div>
    </div>
  );
}
