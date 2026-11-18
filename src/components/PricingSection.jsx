import React, { useState } from "react";

import { motion } from "motion/react";
import { fadeIn, textVariant } from "../utils/motion";

const PricingSection = () => {
  const [productCount, setProductCount] = useState(1);

  // Calculate product price base on product count
  const starterPrice = Math.round(4000 * (productCount / 50));
  const businessPrice = Math.round(7500 * (productCount / 50));
  return (
    <motion.section    variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show" className=" px-4 py-20    ">
      <div className="max-w-6xl mx-auto">
        {/* Pricing  */}
        <div>
          <motion.h1 variants={textVariant(0.3)} className="md:text-4xl text-3xl font-bold text-center mb-16">
            Pricing
          </motion.h1>
        </div>
        {/* Cards */}

        <motion.div 
          variants={fadeIn('up', 0.4)} className="flex md:flex-row flex-col gap-8 mb-12">
          <motion.div 
            variants={fadeIn('right', 0.5)} className=" md:w-1/2 h-25 pl-5 shadow-lg w-full rounded-lg">
            <motion.h3 
              variants={fadeIn('up', 0.6)} className="text-xl text-gray-600 font-semibold my-2 ">
              Starter
            </motion.h3>
            <motion.span   variants={fadeIn('up', 0.7)} className="text-3xl font-bold ">${starterPrice}/mo</motion.span>
          </motion.div>
          <motion.div 
            variants={fadeIn('left', 0.5)} className=" md:w-1/2 h-25 pl-5 shadow-lg w-full">
            <motion.h3 
              variants={fadeIn('up', 0.6)} className="text-xl text-gray-500 font-semibold my-2 ">
              Business
            </motion.h3>
            <motion.span variants={fadeIn('up', 0.7)} className="text-3xl font-bold ">${businessPrice}/mo</motion.span>
          </motion.div>
        </motion.div>
        {/* Products */}

        <motion.div 
          variants={fadeIn('up', 0.8)} className="max-w-xl mx-auto">
          <motion.p 
            variants={fadeIn('up', 0.9)} className="text-center text-gray-600">{productCount} products</motion.p>

          <motion.div 
            variants={fadeIn('up', 1.0)} className="relative px-4 ">
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
          </motion.div>

          <motion.div 
            variants={fadeIn('up', 1.1)} className="text-center mt-12">
            <motion.p 
              variants={fadeIn('up', 1.2)} className="text-xl text-gray-600">Ready to get started?</motion.p>

            <motion.button 
              variants={fadeIn('up', 1.3)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }} className="bg-blue-600 px-6 py-3 rounded-lg mt-4 text-white cursor-pointer hover:bg-blue-700 transition-colors ">Get Started</motion.button>
          </motion.div>


        </motion.div>
      </div>
    </motion.section>
  );
};

export default PricingSection;
