import React from "react";
import SplitText from "./SplitText";
import GradientText from "./GradientText";
const HeroSection = () => {
  return (
    <div className="py-16 md:py-8">
      <div className="max-w-3xl mx-auto text-center">
        <GradientText
          colors={["#FF00FF", "#06B6D4", "#06B6D4", "#06B6D4", "#06B6D4"]}
          animationSpeed={3}
          showBorder={false}
          className="text-7xl font-bold text-center "
        >
          Discover and lending borrow on Zeno
        </GradientText>
        <div className="  px-6 mt-[14px] rounded-lg bordermax-w-2xl mx-auto">
          <p className="text-base text-center text-gray-300">
            Zeno Market is a revolutionizing decentralized trading on the Move
            Ecosystem. Experience seamless lending, borrowing, and margin
            trading with a fully on-chain order book, delivering lightning-fast
            execution and unmatched efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
