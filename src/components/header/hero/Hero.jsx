import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Poster = () => {
  return (
    <div className="w-full relative overflow-hidden rounded-3xl bg-cover bg-center max-sm:bg-hero-bg-small max-sm:bg-bottom sm:max-lg:bg-hero-bg-medium sm:max-lg:aspect-[3/2]">
      <div className="text-white relative max-sm:text-center max-sm:p-3 sm:max-lg:p-8 sm:max-lg:w-[44%]">
        <h2 className="text-[14px] md:text-base font-bold">Domain Names</h2>
        <h3 className="my-3 text-[34px] font-abrilfatface leading-10 max-sm:mx-3">
          Get a .com for <br />₹ 1.00*/1st yr.
        </h3>
        <p className="mt-4 text-[15.5px] font-semibold">
          Grab the world&#39;s most popular domain.
        </p>
        <button className="h-[54px] w-44 my-4 bg-white text-black rounded-lg text-base font-semibold">
          Get It Now
        </button>
        <p className="text-xs font-bold antialiased">
          3-year purchase required. Additional year(s) ₹ 1,299.00*
        </p>
      </div>
      <div className="mt-4 w-full aspect-[7/5] sm:hidden">
        {/* Space for Backgournd Image */}
      </div>
    </div>
  );
};

const WelcomeOffer = () => {
  return (
    <div className="mt-4 mb-8 p-4 rounded-2xl bg-iceberg-100 text-neutral-900 max-sm:flex max-sm:justify-between max-sm:items-center sm:max-lg:pl-8">
      <div className="sm:max-lg:w-[70%]">
        <h2 className="text-base font-semibold">Web Hosting</h2>
        <h3 className="mt-4 text-xl font-abrilfatface sm:max-lg:text-[28px] sm:max-lg:w-4/5 antialiased">
          Secured Hosting <br className="sm:max-lg:hidden" /> from ₹ 199.00/mo.
        </h3>
      </div>
      <div className="sm:max-lg:hidden">
        <a href="#" className="block w-full h-full">
          <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
        </a>
      </div>
      <div className="my-6 max-sm:hidden">
        <a
          href="#"
          className="py-3 px-4 bg-black text-white font-semibold text-base rounded-lg"
        >
          Learn More
        </a>
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
