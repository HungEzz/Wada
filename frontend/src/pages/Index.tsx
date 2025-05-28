import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LendBorrowCards from "@/components/LendBorrowCards";
import VideoBackground from "@/components/VideoBackground";
import SplashCursor from '../components/SplashCursor'

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a061f] text-white">
      <SplashCursor />
      <VideoBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <HeroSection />
          <LendBorrowCards />
        </main>
      </div>
    </div>
  );
};

export default Index;
