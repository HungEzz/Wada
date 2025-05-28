import React from 'react';

const Card = () => {
  return (
    <div className="flex justify-center  ">
      <div className="relative flex flex-col text-center  justify-between gap-4 p-4 w-[19rem] bg-[#16161D] rounded-2xl shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset]"
        style={{
          backgroundImage: `
            radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
            radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
            radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
            radial-gradient(at 0% 64%, hsl(189, 99%, 26%) 0px, transparent 85%),
            radial-gradient(at 41% 94%, hsl(189, 97%, 36%) 0px, transparent 85%),
            radial-gradient(at 100% 99%, hsl(188, 94%, 13%) 0px, transparent 85%)
          `
        }}
      >
        <div className="absolute overflow-hidden pointer-events-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+2px)] h-[calc(100%+2px)] rounded-2xl bg-gradient-to-b from-white/50 via-gray-400 to-gray-600">
          <div className="fixed z-[200] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[10rem] animate-[spin_8s_linear_infinite] origin-left bg-gradient-to-b from-transparent via-[#00C8FF] to-gray-400/0"></div>
        </div>

        <div className="flex flex-col gap-4 text-center">
          <span className="text-4xl text-white font-bold ">Lend</span>
          <p className="mt-1 text-base text-[#d4d4d4]">Lend assets and earn passive yield with ease!</p>
        </div>

        <button className="cursor-pointer py-2 px-4 w-full bg-gradient-to-b from-[#00D1F4] to-[#006772] text-sm text-white rounded-full shadow-[inset_0_-2px_25px_-4px_rgba(255,255,255,1)]">
        Borrow now!
        </button>
      </div>
    </div>
  );
}

export default Card;
