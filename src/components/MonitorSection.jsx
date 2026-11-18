import { FaLongArrowAltRight } from "react-icons/fa";
import monitorImage from "../assets/monitor-card.webp";
import { motion } from "motion/react";
import { fadeIn, textVariant } from "../utils/motion";

const MonitorSection = () => {
  return (
    <motion.section
    variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
     className="max-w-7xl mx-auto  px-4 py-16 md:py-24 flex items-center md:flex-row flex-col gap-5">
      {/* Left Content */}

      <motion.div
      variants={fadeIn('right',0.3)}
      className="md:w-1/2  flex flex-col md:gap-5 gap-2.5">
        <motion.span 
            variants={fadeIn('up', 0.4)} className="font-semibold text-green-500">MONITOR</motion.span>

        <motion.h2 
            variants={textVariant(0.5)} className="md:text-4xl text-3xl font-bold text-neutral-900 md:w-4/5 ">
          Introducing best mobile <br /> carousels
        </motion.h2>

        <motion.p 
            variants={fadeIn('up', 0.6)} className="md:text-lg text-md text-gray-600 ">
         Before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.
        </motion.p>

        <div className="font-semibold text-blue-500 flex items-center gap-2 hover:gap-4 transition-all">
          <motion.a 
            variants={fadeIn('up', 0.7)}
            href="#" >Learn more about monitoring</motion.a>
          <motion.span
           variants={fadeIn('left', 0.8)}
          >
            <FaLongArrowAltRight className="size-6" />
          </motion.span>
        </div>
      </motion.div>

      {/* right image */}
      <motion.div variants={fadeIn('left', 0.3)} className="md:w-1/2 w-full">
        <motion.img
         variants={fadeIn('up', 0.5)}
          src={monitorImage}
          alt="monitor image"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </motion.section>
  );
};

export default MonitorSection;
