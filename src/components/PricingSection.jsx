import React, { useState } from "react";

const PricingSection = () => {
  const [productCount, setProductCount] = useState(1);

  // Calculate product price base on product count
  const starterPrice = Math.round(4000 * (productCount / 50));
  const businessPrice = Math.round(7500 * (productCount / 50));
  return (
    <section className=" px-4 py-20    ">
      <div className="max-w-6xl mx-auto">
        {/* Pricing  */}
        <div>
          <h1 className="md:text-4xl text-3xl font-bold text-center mb-16">
            Pricing
          </h1>
        </div>
        {/* Cards */}

        <div className="flex md:flex-row flex-col gap-8 mb-12">
          <div className=" md:w-1/2 h-25 pl-5 shadow-lg w-full rounded-lg">
            <h1 className="text-xl text-gray-600 font-semibold my-2 ">
              Starter
            </h1>
            <span className="text-3xl font-bold ">${starterPrice}/mo</span>
          </div>
          <div className=" md:w-1/2 h-25 pl-5 shadow-lg w-full">
            <h1 className="text-xl text-gray-500 font-semibold my-2 ">
              Business
            </h1>
            <span className="text-3xl font-bold ">${businessPrice}/mo</span>
          </div>
        </div>
        {/* Products */}

        <div className="max-w-xl mx-auto">
          <p className="text-center text-gray-600">{productCount} products</p>

          <div className="relative px-4 ">
            <div className="flex gap-2 items-center">
              <span className="text-xs sm:text-sm text-gray-600">1</span>
              <input
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                type="range"
                min="1"
                max="50"
                value={productCount}
                onChange={(e) => setProductCount(parseInt(e.target.value))}
              />
              <span className="text-xs sm:text-sm text-gray-600">50</span>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-600">Ready to get started?</p>

            <button className="bg-blue-600 px-6 py-3 rounded-lg mt-4 text-white cursor-pointer hover:bg-blue-700 transition-colors ">Get Started</button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default PricingSection;
