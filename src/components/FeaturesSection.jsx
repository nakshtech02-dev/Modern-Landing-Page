import React from "react";

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
    <section className="w-full bg-white py-16 ">
      <div className=" container mx-auto">
        {/* Heading */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="md:text-3xl text-2xl font-bold">
            How can we help your business?
          </h1>
          <p className="text-lg text-gray-500 mt-2 text-center">
            When you resell besnik, you build trust and increase
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:my-15 my-5 place-items-center ">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" max-w-xs flex flex-col items-center text-center"
            >
              <div
                className={`text-3xl h-24 w-24 flex rounded-full justify-center items-center ${feature.bgColor}`}
              >
                {feature.icon}
              </div>
              <h1 className="text-2xl font-medium my-5">{feature.title}</h1>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>

        <button className="bg-blue-600 px-8 py-3 rounded-full  text-white hover:bg-blue-700   transition-colors flex mx-auto cursor-pointer relative z-10">
          Become a Partner

          <div className="absolute  -z-10 w-full h-full rounded-full bg-blue-600/50 blur-xl top-0 left-0"></div>
        </button>
      </div>
    </section>
  );
};

export default FeaturesSection;
