import CountUp from "react-countup";
import { FaBolt } from "react-icons/fa";
import { SiFoursquarecityguide } from "react-icons/si";

const SuccessStories = () => {
  return (
    <div className="py-12 px-4">
      <div className="stats shadow w-full flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-4">
        {/* Total Campaigns Funded */}
        <div className="stat flex-1">
          <div className="stat-figure text-primary text-3xl">
            <SiFoursquarecityguide />
          </div>
          <div className="stat-title text-sm md:text-base">
            Total Campaigns Funded
          </div>
          <div className="stat-value text-primary text-lg md:text-2xl lg:text-3xl">
            <CountUp end={1245} duration={5} />
          </div>
          <div className="stat-desc text-xs md:text-sm">
            10% increase this month
          </div>
        </div>

        {/* Total Funds Raised */}
        <div className="stat flex-1">
          <div className="stat-figure text-secondary text-3xl">
            <FaBolt />
          </div>
          <div className="stat-title text-sm md:text-base">
            Total Funds Raised
          </div>
          <div className="stat-value text-secondary text-lg md:text-2xl lg:text-3xl">
            $4.3M
          </div>
          <div className="stat-desc text-xs md:text-sm">
            15% more than last month
          </div>
        </div>

        {/* Campaign Success Rate */}
        <div className="stat flex-1">
          <div className="stat-figure text-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-9 w-9 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5-3a9 9 0 11-6.328-2.672"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-sm md:text-base">
            Campaign Success Rate
          </div>
          <div className="stat-value text-accent text-lg md:text-2xl lg:text-3xl">
            <CountUp end={89} duration={5} />%
          </div>
          <div className="stat-desc text-xs md:text-sm">
            Based on completed campaigns
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
