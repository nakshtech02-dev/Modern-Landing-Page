import { FaLongArrowAltRight } from "react-icons/fa"
import statsImage from "../assets/stats.webp"
import { motion } from "motion/react";
import { fadeIn, textVariant } from "../utils/motion";

const ScheduleSection = () => {
  return (
    <motion.section
     variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
     className='max-w-7xl mx-auto  px-4 py-16 md:py-24 flex items-center md:flex-row flex-col'>
     
     {/* left image */}
        <motion.div
        variants={fadeIn('right', 0.3)}
         className="md:w-1/2 w-full">
            <motion.img  variants={fadeIn('up', 0.4)} src={statsImage} alt="schedule image" className="w-full h-full object-contain" />
        </motion.div>

     {/* Right Content */}

     <motion.div variants={fadeIn('left', 0.3)} className="md:w-1/2 flex flex-col md:gap-5 gap-2.5">
        <motion.span  variants={fadeIn('up', 0.4)} className="font-semibold text-orange-500">SCHEDULE</motion.span>

        <motion.h1  variants={textVariant(0.5)} className="md:text-4xl text-3xl font-bold text-neutral-900 ">Streamline Your Business <br /> With Smart Scheduling Solutions</motion.h1>

        <motion.p 
        variants={fadeIn('up', 0.6)}
         className="md:text-lg text-md text-gray-600 ">Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments, manage team availability, and deliver exceptional customer experiences through seamless calendar management.</motion.p>

        <div className="font-semibold text-blue-500 flex items-center gap-2 hover:gap-4 transition-all">
            <motion.span
             variants={fadeIn('up', 0.7)}
            >Explore scheduling features </motion.span>
            <motion.span  variants={fadeIn('left', 0.8)}><FaLongArrowAltRight className="size-6" /></motion.span>
        </div>
     </motion.div>

    </motion.section>
  )
}

export default ScheduleSection
