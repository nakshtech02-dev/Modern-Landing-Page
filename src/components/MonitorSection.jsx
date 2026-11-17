import { FaLongArrowAltRight } from "react-icons/fa";
import monitorImage from "../assets/monitor-card.webp";

const MonitorSection = () => {
  return (
    <section className="max-w-7xl mx-auto  px-4 py-16 md:py-24 flex items-center md:flex-row flex-col gap-5">
      {/* Left Content */}

      <div className="md:w-1/2  flex flex-col md:gap-5 gap-2.5">
        <span className="font-semibold text-green-500">MONITOR</span>

        <h1 className="md:text-4xl text-3xl font-bold text-neutral-900 md:w-4/5 ">
          Introducing best mobile <br /> carousels
        </h1>

        <p className="md:text-lg text-md text-gray-600 ">
         Before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.
        </p>

        <div className="font-semibold text-blue-500 flex items-center gap-2 hover:gap-4 transition-all">
          <span>Learn more about monitoring</span>
          <span>
            <FaLongArrowAltRight className="size-6" />
          </span>
        </div>
      </div>

      {/* right image */}
      <div className="md:w-1/2 w-full">
        <img
          src={monitorImage}
          alt="monitor image"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default MonitorSection;
