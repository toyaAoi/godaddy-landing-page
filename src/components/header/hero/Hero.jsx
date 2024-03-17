import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import heroBg from "../../../assets/hero-bg-small.webp";

const Poster = () => {
  return (
    <div className="w-full relative overflow-hidden rounded-3xl">
      {/* Background Image */}
      <img src={heroBg} className="w-full bottom-0 mx-auto absolute z-0" />

      <div className="p-3 text-white text-center relative z-10">
        <h2 className="text-[14px] md:text-base font-bold">Domain Names</h2>
        <h3 className="m-3   text-[34px] font-abrilfatface leading-10">
          Get a .com for <br />₹ 1.00*/1st yr.
        </h3>
        <p className="mt-4 text-base font-semibold">
          Grab the world&#39;s most popular domain
        </p>
        <button className="h-[54px] w-44 my-4 bg-white text-black rounded-lg text-base font-semibold">
          Get It Now
        </button>
        <p className="text-xs font-bold antialiased">
          3-year purchase required. Additional year(s) ₹ 1,299.00*
        </p>
      </div>
      <div className="mt-4 w-full aspect-[7/5]">
        {/* Space for Backgournd Image */}
      </div>
    </div>
  );
};

const WelcomeOffer = () => {
  return (
    <div className="mt-4 mb-8 p-4 flex justify-between items-center rounded-2xl bg-iceberg-100 text-neutral-900">
      <div>
        <h2 className="text-base font-semibold">Web Hosting</h2>
        <h3 className="mt-4 text-xl font-abrilfatface ">
          Secured Hosting <br /> from ₹ 199.00/mo.
        </h3>
      </div>
      <div>
        <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="mx-4">
      <Poster />
      <WelcomeOffer />
    </div>
  );
};

export default Hero;
