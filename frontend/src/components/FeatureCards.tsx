
import React from "react";
import { Button } from "@/components/ui/button";

const FeatureCards = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-10 mb-20">
      {/* Lend Card */}
      <div className="bg-gradient-to-br from-red-400 to-red-500 rounded-3xl p-6 flex flex-col items-center text-center">
        <div className="bg-white rounded-full p-4 mb-4">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
              className="text-green-500"
            />
            <path
              d="M15 8H9.5C8.67157 8 8 8.67157 8 9.5C8 10.3284 8.67157 11 9.5 11H14.5C15.3284 11 16 11.6716 16 12.5C16 13.3284 15.3284 14 14.5 14H8M12 6V8M12 14V16"
              stroke="currentColor"
              strokeWidth="2"
              className="text-green-500"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-3">Lend</h2>
        <p className="mb-6 text-white/90">
          Lend assets and earn passive yield with ease!
        </p>
        <Button className="bg-black/20 hover:bg-black/30 rounded-xl mt-auto">
          Try it
        </Button>
      </div>

      {/* Borrow Card */}
      <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl p-6 flex flex-col items-center text-center">
        <div className="bg-white rounded-full p-4 mb-4">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
              className="text-amber-500"
            />
            <path
              d="M12 6V8M12 12V16M15.5 12H8.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-amber-500"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-3">Borrow</h2>
        <p className="mb-6 text-white/90">
          Borrow smarter, lightning-fast approvals with low-interest rates!
        </p>
        <Button className="bg-black/20 hover:bg-black/30 rounded-xl mt-auto">
          Try it
        </Button>
      </div>
    </div>
  );
};

export default FeatureCards;
