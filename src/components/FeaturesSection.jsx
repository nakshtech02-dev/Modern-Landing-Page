import { motion } from "motion/react";
import { fadeIn, textVariant } from "../utils/motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🔍",
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like",
      bgColor: "bg-[#F1EFFD]",
    },
    {
      icon: "⚙️",
      title: "Work out the details",
      description: "Communication protocols apart from engagement models",
      bgColor: "bg-[#FEE7EF]",
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing",
      bgColor: "bg-[#FFF3E4]",
    },
  ];
  return (
    <motion.section
     variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
     className="w-full bg-white py-16 ">
      <motion.div variants={fadeIn('up', 0.3)} className=" container mx-auto">
        {/* Heading */}
        <div className="flex flex-col justify-center items-center">
          <motion.h1
          variants={textVariant(0.2)}
           className="md:text-3xl text-2xl font-bold">
            How can we help your business?
          </motion.h1>
          <motion.p
          variants={fadeIn('up', 0.4)}
           className="text-lg text-gray-500 mt-2 text-center">
            When you resell besnik, you build trust and increase
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
         variants={fadeIn('up', 0.5)}
         className="grid md:grid-cols-3 grid-cols-1 gap-5 md:my-15 my-5 place-items-center ">
          {features.map((feature, index) => (
            <motion.div
            variants={fadeIn('up', 0.3 * (index + 1))}
              key={index}
              className=" max-w-xs flex flex-col items-center text-center"
            >
              <motion.div
              variants={fadeIn('down', 0.4 * (index + 1))}
                className={`text-3xl h-24 w-24 flex rounded-full justify-center items-center ${feature.bgColor}`}
              >
                {feature.icon}
              </motion.div>
              <motion.h1
              variants={textVariant(0.3)}
               className="text-2xl font-medium my-5">{feature.title}</motion.h1>
              <motion.p 
              variants={fadeIn('up', 0.6 * (index + 1))}
               className="text-gray-500">{feature.description}</motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.button

        variants={fadeIn('up', 0.8)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        
        className="bg-blue-600 px-8 py-3 rounded-full  text-white hover:bg-blue-700   transition-colors flex mx-auto cursor-pointer relative z-10">
          Become a Partner

          <div className="absolute  -z-10 w-full h-full rounded-full bg-blue-600/50 blur-xl top-0 left-0"></div>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default FeaturesSection;
