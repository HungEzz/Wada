import React from "react";
import GlassmorphismCard from "@/components/GlassmorphismCard";

const GlassmorphismDemo = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-700 p-8">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
          Glassmorphism Demo
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Lend Card */}
          <GlassmorphismCard
            title="Lend"
            description="Lend assets and earn passive yield with ease!"
            hue={240}
          />
          
          {/* Borrow Card */}
          <GlassmorphismCard
            title="Borrow"
            description="Borrow smarter, lightning-fast approvals with low-interest rates!"
            hue={180}
          />
          
          {/* Stake Card */}
          <GlassmorphismCard
            title="Stake"
            description="Earn rewards by staking your assets in secure validators!"
            hue={320}
          />
          
          {/* Trade Card */}
          <GlassmorphismCard
            title="Trade"
            description="Swap assets instantly with competitive rates and low fees!"
            hue={60}
          />
        </div>
      </div>
    </div>
  );
};

export default GlassmorphismDemo; 