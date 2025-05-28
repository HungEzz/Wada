import React from "react";
import GlassmorphismCreditCard from "@/components/GlassmorphismCreditCard";

const CreditCardDemo = () => {
  return (
    <div className="relative min-h-screen overflow-hidden p-8">
      {/* Background with gradient shapes */}
      <div className="fixed inset-0 bg-[#0a061f] -z-10">
        {/* Purple circle */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-500 to-purple-700 opacity-60 blur-md"></div>
        
        {/* Orange/red circle */}
        <div className="absolute top-3/4 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-60 blur-md"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-16">
          Credit Card Glassmorphism
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Example 1 */}
          <GlassmorphismCreditCard 
            cardholderName="ANURAG GHARAT"
            cardNumber="1892 1232 1242 0099"
            expiryDate="07/27"
          />
          
          {/* Example 2 */}
          <GlassmorphismCreditCard 
            cardholderName="JOHN SMITH"
            cardNumber="4532 8721 5463 8976"
            expiryDate="12/26"
            className="bg-gradient-to-br from-blue-400/30 to-cyan-500/30"
          />
          
          {/* Example 3 */}
          <GlassmorphismCreditCard 
            cardholderName="EMMA WILSON"
            cardNumber="6011 5213 4298 7654"
            expiryDate="03/28"
            className="bg-gradient-to-br from-emerald-400/30 to-teal-500/30"
          />
          
          {/* Example 4 */}
          <GlassmorphismCreditCard 
            cardholderName="ALEX JOHNSON"
            cardNumber="3782 8224 6310 005"
            expiryDate="09/25"
            className="bg-gradient-to-br from-amber-400/30 to-orange-500/30"
          />
        </div>
      </div>
    </div>
  );
};

export default CreditCardDemo; 