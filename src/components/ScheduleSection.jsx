import { FaLongArrowAltRight } from "react-icons/fa"
import statsImage from "../assets/stats.webp"

const ScheduleSection = () => {
  return (
    <section className='max-w-7xl mx-auto  px-4 py-16 md:py-24 flex items-center md:flex-row flex-col'>
     
     {/* left image */}
        <div className="md:w-1/2 w-full">
            <img src={statsImage} alt="schedule image" className="w-full h-full object-contain" />
        </div>

     {/* Right Content */}

     <div className="md:w-1/2 flex flex-col md:gap-5 gap-2.5">
        <span className="font-semibold text-orange-500">SCHEDULE</span>

        <h1 className="md:text-4xl text-3xl font-bold text-neutral-900 ">Streamline Your Business <br /> With Smart Scheduling Solutions</h1>

        <p className="md:text-lg text-md text-gray-600 ">Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments, manage team availability, and deliver exceptional customer experiences through seamless calendar management.</p>

        <div className="font-semibold text-blue-500 flex items-center gap-2 hover:gap-4 transition-all">
            <span>Explore scheduling features </span>
            <span><FaLongArrowAltRight className="size-6" /></span>
        </div>
     </div>

    </section>
  )
}

export default ScheduleSection
