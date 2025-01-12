import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FaHandshake, FaStar } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { BsStars } from "react-icons/bs";

const VolunteerStats = () => {
  const [counterState, setCounterState] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterState(true)}
      onExit={() => setCounterState(false)}
    >
      <div className="bg-green-100   py-8 px-4 flex flex-col md:flex-row justify-around items-center rounded-lg mt-24 font-1">
        {/* Card 1 */}
        <div className="text-center flex-1 mb-6 md:mb-0">
          <div className="text-4xl mb-2 ml-[150px] text-yellow-300">
            <BsStars />
          </div>
          <h2 className="text-4xl font-bold">
            {counterState && <CountUp start={0} end={520} duration={2.5} />}+
          </h2>
          <p className="text-xl font-bold">Opportunities Available</p>
        </div>

        <div className="w-full md:w-px bg-black h-0.5 md:h-12 my-4 md:my-0 hidden md:block"></div>

        {/* Card 2 */}
        <div className="text-center flex-1 mb-6 md:mb-0">
          <div className="text-4xl mb-2 ml-[150px] text-yellow-300">
            <ImStatsDots />
          </div>
          <h2 className="text-4xl font-bold">
            {counterState && <CountUp start={0} end={87} duration={2.5} />}%
          </h2>
          <p className="text-xl font-bold">Volunteer Growth</p>
        </div>

        <div className="w-full md:w-px bg-black h-0.5 md:h-12 my-4 md:my-0 hidden md:block"></div>

        {/* Card 3 */}
        <div className="text-center flex-1 mb-6 md:mb-0">
          <div className="text-4xl mb-2 ml-[150px] text-yellow-300">
            <FaStar />
          </div>
          <h2 className="text-4xl font-bold">
            {counterState && <CountUp start={0} end={375} duration={2.5} />}+
          </h2>
          <p className="text-xl font-bold">Projects Completed</p>
        </div>

        <div className="w-full md:w-px bg-black h-0.5 md:h-12 my-4 md:my-0 hidden md:block"></div>

        {/* Card 4 */}
        <div className="text-center flex-1">
          <div className="text-4xl mb-2 ml-[150px] text-yellow-300">
            <FaHandshake />
          </div>
          <h2 className="text-4xl font-bold">
            {counterState && <CountUp start={0} end={93} duration={2.5} />}%
          </h2>
          <p className="text-xl font-bold">Volunteer Retention</p>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default VolunteerStats;
