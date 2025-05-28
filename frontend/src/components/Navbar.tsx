import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`py-4 px-6 md:px-10 flex justify-between items-center sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md bg-black/20' : ''
    }`}>
      <div className="flex items-center">
        <div className="rounded-full p-0.5 mr-2">
          <img src="/zeno-logo.png" alt="logo" className="w-10 h-10 rounded-full" />
        </div>
        <span className="text-xl font-serif font-bold">Zeno</span>
      </div>
      
      <div className="hidden md:flex items-center">
        <button 
          className="relative py-2.5 px-8 rounded-full overflow-hidden group"
        >
          {/* Background layer with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-cyan-600 rounded-full" />
          
          {/* Shine effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-500 rounded-full opacity-70 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
          
          {/* Inner layer for 3D effect */}
          <div className="absolute inset-[0.5px] rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 opacity-90 group-hover:opacity-100 transition-all duration-300" />
          
          {/* Moving glow effect */}
          <div 
            className="absolute inset-0 w-1/3 h-full bg-white/30 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer"
            style={{
              backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              backgroundSize: '200% 100%',
            }}
          />
          
          {/* Button text with shadow for better readability */}
          <span className="relative z-10 text-white font-light text-base  drop-shadow-md">
            Get started
          </span>
        </button>
      </div>
      
      <div className="md:hidden">
        <button 
          className="relative py-2 px-5 rounded-full overflow-hidden group"
        >
          {/* Background layer with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-cyan-600 rounded-full" />
          
          {/* Shine effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-500 rounded-full opacity-70 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
          
          {/* Inner layer for 3D effect */}
          <div className="absolute inset-[0.5px] rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 opacity-90 group-hover:opacity-100 transition-all duration-300" />
          
          {/* Button text with shadow for better readability */}
          <span className="relative z-10 text-white font-medium text-xs tracking-wider uppercase drop-shadow-md">
            Get started
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
