import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Poster = () => {
  return (
    <div
      className={
        "w-full relative overflow-hidden rounded-3xl bg-cover bg-center max-sm:bg-hero-bg-small max-sm:bg-bottom sm:max-xl:bg-hero-bg-medium sm:max-xl:aspect-[3/2] xl:bg-hero-bg-large xl:aspect-[19/10] xl:grow"
      }
    >
      <div className="text-white relative max-sm:text-center max-sm:p-3 sm:p-8 sm:w-[44%]">
        <h2 className="text-[14px] md:text-base font-bold">Domain Names</h2>
        <h3 className="my-3 max-xl:text-[34px] xl:text-5xl font-abrilfatface !leading-[1.3] max-sm:mx-3">
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
        {/* Space for Background Image */}
      </div>
    </div>
  );
};

const WelcomeOffer = () => {
  return (
    <div className="max-xl:mt-4 max-xl:mb-8 p-4 rounded-3xl bg-iceberg-100 text-neutral-900 max-sm:flex max-sm:justify-between max-sm:items-center sm:pl-8 xl:grow xl:basis-1/3 xl:text-center xl:flex xl:flex-col xl:items-center xl:justify-center">
      <div className="sm:max-xl:w-[70%]">
        <h2 className="text-base font-semibold">Web Hosting</h2>
        <h3 className="max-xl:mt-4 xl:my-4 text-xl font-abrilfatface sm:max-xl:text-[28px] xl:text-[32px] xl:leading-10 sm:max-xl:w-4/5 antialiased">
          Secured Hosting <br className="sm:hidden" /> from ₹ 199.00/mo.
        </h3>
      </div>
      <div className="sm:hidden">
        <a href="#" className="block w-full h-full">
          <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
        </a>
      </div>
      <div className="list-disc text-base font-semibold">
        <p>• Improved page loads and SEO</p>
        <p>• 24/7 network security</p>
        <p>• 30-day money back guarantee</p>
      </div>
      <div className="max-xl:my-6 xl:mt-10 max-sm:hidden">
        <a
          href="#"
          className="max-xl:py-3 max-xl:px-4 xl:py-4 xl:px-12 bg-black text-white font-semibold text-base rounded-lg"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="max-xl:mx-4 xl:mx-[4vw] xl:flex xl:gap-6">
      <Poster />
      <WelcomeOffer />
    </div>
  );
};

export default Hero;
