import { motion } from "motion/react";
import { fadeIn, textVariant } from "../utils/motion";

const PurposeSection = () => {
  const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Built for impact",
      description:
        "We identify and nurture a truly diverse team of designers, developers and marketers",
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "In sync with you",
      description:
        "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.",
    },
  ];
  return (
    <section
      id="about"
      className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {/* Heading */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
          >
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              className="text-sm text-purple-600 font-semibold mb-2"
            >
              ACHIEVE MORE
            </motion.p>
            <motion.h2
              variants={textVariant(0.5)}
              initial="hidden"
              whileInView="show"
              className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900 "
            >
              Purpose of a convoy is to keep your team
            </motion.h2>
          </motion.div>

          {/* bullet point  */}

          {features.map((feat, index) => (
            <motion.div
              variants={fadeIn("right", 0.4 * (index + 1))}
              initial="hidden"
              whileInView="show"
              key={index}
              className="flex gap-5 "
            >
              <motion.span
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView="show"
                className="w-12 h-12 mt-5"
              >
                {feat.icon}
              </motion.span>
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
              >
                <motion.h1
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView="show"
                  className="text-xl font-semibold text-gray-900 mb-2"
                >
                  {feat.title}
                </motion.h1>
                <motion.p
                  variants={fadeIn("up", 0.7)}
                  initial="hidden"
                  whileInView="show"
                  className="text-gray-600"
                >
                  {feat.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
