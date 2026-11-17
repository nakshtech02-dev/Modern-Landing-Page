import React from "react";
import { BiTime } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { HiLightBulb } from "react-icons/hi";

const ServicesSection = () => {
  const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600 animate-pulse" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more"
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400 animate-pulse" />,
      title: "Ad-Creatives", 
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more"
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400 animate-pulse" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more"
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400 animate-pulse" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more"
    }
  ]

  return (
    <section id="services" className="py-20  container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex md:flex-row flex-col items-center gap-12 lg:gap-24">
        {/* left */}
        <div className="md:w-1/2 flex flex-col gap-5 w-full">
          <h1 className="text-3xl md:text-4xl font-bold md:w-4/5 ">
            Future of support with new shape
          </h1>

          <p className="text-gray-600 md:w-4/5  ">
            Discuss your goals, determine success metrics, <br />
            identify problems
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className=" size-5 flex justify-center items-center bg-indigo-100 rounded-full ">
                <div className=" size-2.5 rounded-full bg-indigo-600 " />
              </div>
              <span className="text-gray-600">UX design content-strategy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className=" size-5 flex justify-center items-center bg-indigo-100 rounded-full ">
                <div className=" size-2.5 rounded-full bg-indigo-600 " />
              </div>
              <span className="text-gray-600">Development bring</span>
            </div>
          </div>

          <button className="bg-indigo-600 text-white px-5 py-2 rounded-full w-[150px] hover:bg-indigo-700 transition-colors">
            Get Started
          </button>
        </div>

        {/* right */}
        <div className="md:w-1/2 grid md:grid-cols-2 md:grid-row-2 grid-cols-1 md:gap-10 gap-5 ">
          {services.map((card,index)=> (
            <div key={index} className="flex flex-col gap-2 bg-white p-5 rounded-2xl max-w-72 hover:scale-105 hover:shadow-xl transition-all   duration-300 ">
              {card.icon}

              <h1 className="text-xl font-semibold">{card.title}</h1>

              <p className="text-lg text-gray-600">{card.description}</p>

              <a href={card.link} className="uppercase text-indigo-600 font-medium hover:text-indigo-700 transition-colors">Learn More</a>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
