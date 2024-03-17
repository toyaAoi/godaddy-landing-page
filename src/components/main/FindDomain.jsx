import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FindDomain = () => {
  return (
    <section className="py-16 px-4 bg-iceberg-100 text-center">
      <h2 className="my-6 text-[29px] font-abrilfatface">
        It all starts with a domain.
      </h2>
      <p className="text-base ">
        Make your idea real. Claim your space online with a domain.
      </p>
      <form className="mt-24 h-[60px]">
        <input
          type="text"
          placeholder="Find your perfect domain"
          className="h-full w-[calc(100%-60px)] pl-5 py-4 placeholder:text-base placeholder:text-neutral-500"
        />
        <button className="w-[60px] h-full bg-black">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
        </button>
      </form>
    </section>
  );
};

export default FindDomain;
